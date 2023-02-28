import React from 'react';
import {
  ChannelListProvider,
  useChannelListContext,
} from '@sendbird/uikit-react/ChannelList/context';

interface IChannelListProps {
  onSelectChannel: (value: string) => void;
}

const ChannelList = ({ onSelectChannel }: IChannelListProps) => {
  return (
    <ChannelListProvider isTypingIndicatorEnabled={true}>
      <ChannelListComponent onSelectChannel={onSelectChannel} />
    </ChannelListProvider>
  );
};

const ChannelListComponent = ({ onSelectChannel }: IChannelListProps) => {
  const { allChannels, loading } = useChannelListContext();

  console.log(allChannels);
  return (
    <div className="p-4 w-full">
      <h1>Chat</h1>

      {loading && <h1>Loading...</h1>}

      <section className="flex flex-col mt-5 gap-3">
        {allChannels.map((channel, idx) => (
          <div
            className="flex p-2 gap-3 border rounded-lg"
            key={idx}
            onClick={() => onSelectChannel(channel?.url)}
          >
            <img src={channel?.coverUrl} className="rounded-full w-8 h-8 my-auto" />
            <div className="my-auto">
              <div className="flex">{channel.name}</div>
              <p className="text-xs text-gray-400">{channel?.lastMessage?.message}</p>
            </div>
            {channel.unreadMessageCount > 0 && (
              <span className="ml-auto text-xs bg-green-400 h-5 w-5 text-center text-white rounded-md">
                {channel.unreadMessageCount}
              </span>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ChannelList;
