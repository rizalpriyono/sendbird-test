import {
  ChannelListProvider,
  useChannelListContext,
} from '@sendbird/uikit-react/ChannelList/context';
import React from 'react';
import ChannelPreview from '@sendbird/uikit-react/ChannelList/components/ChannelPreview';

const ChannelList = () => {
  return (
    <ChannelListProvider isTypingIndicatorEnabled={true}>
      <ChannelListComponent />
    </ChannelListProvider>
  );
};

const ChannelListComponent = () => {
  const { allChannels } = useChannelListContext();
  return (
    <div className="h-full bg-slate-100">
      {allChannels.map((channel, idx) => (
        <ChannelPreview
          key={idx}
          channel={channel}
          onClick={() => console.log('click')}
          tabIndex={idx}
          renderChannelAction={() => <div>aia</div>}
        />
      ))}
    </div>
  );
};

export default ChannelList;
