import API from '../api';
import { useState, useEffect } from 'react';
import { navigate } from "gatsby";
import Banner from './Banner';

export default function AstraSuccess() {
  const [error, setError] = useState('');

  useEffect(() => {
    let url = new URL(window.location.href);
    if (url.search.split('?authorization_code=')[1]) {
      let authCode = url.search.split('?authorization_code=')[1];
      const redirect_uri = `${process.env.REACT_APP_ASTRA_REDIRECT_URI}`;

      try {
        API.postAstraAuthCode(authCode, redirect_uri).then((res) => {
          console.log('Redirecting...');
          navigate('/onboarding/connect-bank-account');
        });
      } catch (e) {
        console.log(e);
        setError(e);
      }
    }
  }, []);

  return (
    <>
      <Banner severity="error" text={error} />
    </>
  );
}
