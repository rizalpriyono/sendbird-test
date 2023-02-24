import { useState } from 'react';
import dynamic from 'next/dynamic';

const ChannelList = dynamic(() => import('@/components/ChannelList'), {
  ssr: false,
  loading: () => <p>...</p>,
});

const ChannelChat = dynamic(() => import('@/components/ChannelChat'), {
  ssr: false,
  loading: () => <p>...</p>,
});

const Sample1 = () => {
  const [channelUrl, setChannelUrl] = useState<string>('');

  return (
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
  );
};

export default Sample1;
