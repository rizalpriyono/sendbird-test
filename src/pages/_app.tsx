import '@sendbird/uikit-react/dist/index.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SendBirdProvider } from '@sendbird/uikit-react';
import { USERID } from '@/constants';
import { useEffect, useState } from 'react';

const APP_ID = 'F9B01914-4A11-4F9B-9462-9212C261957B';
const user = {
  userId: USERID,
};

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }
  return (
    <SendBirdProvider appId={APP_ID} {...user}>
      <Component {...pageProps} />
    </SendBirdProvider>
  );
}
