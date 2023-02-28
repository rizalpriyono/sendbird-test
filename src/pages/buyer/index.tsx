import { useState } from 'react';
import dynamic from 'next/dynamic';
import { SendBirdProvider } from '@sendbird/uikit-react';

const ChannelList = dynamic(() => import('@/components/ChannelList'), {
  ssr: false,
  loading: () => <p>...</p>,
});

const ChannelChat = dynamic(() => import('@/components/ChannelChat'), {
  ssr: false,
  loading: () => <p>...</p>,
});

const APP_ID = 'F9B01914-4A11-4F9B-9462-9212C261957B';
const USER_ID = 'test456';
const TOKEN = 'c5c15134c6b070a05f631b4b026531266404bf75';

const Buyer = () => {
  const [channelUrl, setChannelUrl] = useState<string>('');

  return (
    <SendBirdProvider appId={APP_ID} userId={USER_ID} accessToken={TOKEN}>
      <div className="w-screen h-screen p-5">
        <div className="flex w-[1100px] mx-auto h-full border rounded-md overflow-hidden">
          <div className="border-r">
            <ChannelList onSelectChannel={setChannelUrl} />
          </div>

          <div className="flex-grow">
            <ChannelChat channelUrl={channelUrl} />
          </div>
        </div>
      </div>
    </SendBirdProvider>
  );
};

export default Buyer;
