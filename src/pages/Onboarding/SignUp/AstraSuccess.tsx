import API from 'api';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Banner from '../../../components/Banner';

export default function AstraSuccess() {
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    let url = new URL(window.location.href);
    if (url.search.split('?authorization_code=')[1]) {
      let authCode = url.search.split('?authorization_code=')[1];
      const redirect_uri = `${process.env.REACT_APP_ASTRA_REDIRECT_URI}`;

      try {
        API.postAstraAuthCode(authCode, redirect_uri).then((res) => {
          console.log('Redirecting...');
          history.push('/onboarding/connect-bank-account');
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
