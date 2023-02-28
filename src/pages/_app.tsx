import '@sendbird/uikit-react/dist/index.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SendBirdProvider } from '@sendbird/uikit-react';

const APP_ID = 'F9B01914-4A11-4F9B-9462-9212C261957B';
const USER_ID = 'test456';
const TOKEN = 'c5c15134c6b070a05f631b4b026531266404bf75';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SendBirdProvider appId={APP_ID} userId={USER_ID} accessToken={TOKEN}>
      <Component {...pageProps} />
    </SendBirdProvider>
  );
}
