import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import SendbirdApp from '@sendbird/uikit-react/App';
import { APP_ID, USERID } from '@/constants';

const ChannelList = dynamic(() => import('@/components/modules/ChannelList'), {
  ssr: false,
  loading: () => <p>...</p>,
});

export default function Chat() {
  const [channelUrl, setChannelUrl] = useState('');
  return (
    <div className="w-screen h-screen p-5">
      <div className="flex w-[1100px] mx-auto h-full border">
        {/* <ChannelList /> */}
        <SendbirdApp
          // Add the two lines below.
          appId={APP_ID} // Specify your Sendbird application ID.
          userId={USERID} // Specify your user ID.
        />
      </div>
    </div>
  );
}
