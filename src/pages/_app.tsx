import '@sendbird/uikit-react/dist/index.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SendBirdProvider } from '@sendbird/uikit-react';

const APP_ID = 'F9B01914-4A11-4F9B-9462-9212C261957B';
const USER_ID = 'test456';
const TOKEN = '192d932ceb4802f746401d899923fc4b4893fd30';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SendBirdProvider appId={APP_ID} userId={USER_ID}>
      <Component {...pageProps} />
    </SendBirdProvider>
  );
}
