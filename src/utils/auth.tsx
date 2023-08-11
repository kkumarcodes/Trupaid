import auth0 from "auth0-js";
import { navigate } from "gatsby";
import { store } from "../store";

const isBrowser = typeof window !== "undefined";
console.log(process.env.GATSBY_AUTH0_DOMAIN, '==process.env.AUTH0_DOMAIN=')
const auth = isBrowser
  ? new auth0.WebAuth({
    domain: process.env.GATSBY_AUTH0_DOMAIN,
    clientID: process.env.GATSBY_AUTH0_CLIENTID,
    redirectUri: process.env.GATSBY_AUTH0_CALLBACK,
    responseType: "token id_token",
    scope: "openid profile email",
    returnTo: "/"
  })
  : {};

const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
};

let user = null;

export const isAuthenticated = () => {
  if (!isBrowser) {
    return;
  }

  const appState = JSON.parse(localStorage.getItem('persist:app'))
  return appState?.isLoggedIn === true;
};

export const login = () => {
  if (!isBrowser) {
    return;
  }

  auth.authorize();
};

export const logout = () => {
  if (!isBrowser) {
    return;
  }

  auth.logout();
};

export const signup = () => {
  if (!isBrowser) {
    return;
  }

  auth.authorize({
    "prompt.name": "signup"
  });
};

const setSession =
  (cb = () => { }) =>
    (err, authResult) => {
      if (err) {
        cb();
        navigate('/')
        return;
      }

      if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
        tokens.accessToken = authResult.accessToken;
        tokens.idToken = authResult.idToken;
        tokens.expiresAt = expiresAt;
        user = authResult.idTokenPayload;    

        store.dispatch({ type: actionTypes.UPDATE_AUTH_USER, value: user })
        store.dispatch({ type: actionTypes.UPDATE_ACCESS_TOKEN, value: authResult.accessToken })
        store.dispatch({ type: actionTypes.GET_PROFILE })
        store.dispatch({ type: actionTypes.UPDATE_IS_LOGGED_IN, value: true })
        cb();
        // store.dispatch({ type: actionTypes.UPDATE_LOGGING_IN })
      }
    };

export const silentAuth = (callback) => {
  if (!isAuthenticated()) return callback();
  auth.checkSession({}, setSession(callback));
};

export const handleAuthentication = () => {
  if (!isBrowser) {
    return;
  }
  // setSession(navigate('/'))
  auth.parseHash(setSession());
};

export const getProfile = () => {
  return user;
};
export const setProfile = (data) => {
  user = data;
};