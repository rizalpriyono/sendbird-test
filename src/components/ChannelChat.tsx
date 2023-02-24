import {
  ChannelProvider,
  useChannelContext,
} from '@sendbird/uikit-react/Channel/context';
import MessageComponent from './Message';

import React, { useState } from 'react';
import { useSendbirdStateContext, sendbirdSelectors } from '@sendbird/uikit-react';
import { OpenChannel } from '@sendbird/chat/openChannel';
import { UserMessageCreateParams } from '@sendbird/chat/message';
import { GroupChannel } from '@sendbird/chat/groupChannel';

interface IChannelChatProps {
  channelUrl: string;
}

const ChannelChat = ({ channelUrl }: IChannelChatProps) => {
  return (
    <ChannelProvider channelUrl={channelUrl}>
      <ChannelComponent />
    </ChannelProvider>
  );
};

const ChannelComponent = () => {
  const [text, setText] = useState<string>('');
  const { allMessages, loading, channelUrl } = useChannelContext();
  const context = useSendbirdStateContext();

  const sendMessage = sendbirdSelectors.getSendUserMessage(context);
  const getGroupChannel = sendbirdSelectors.getGetGroupChannel(context);

  const handleSendMessage = async () => {
    const message: UserMessageCreateParams = {
      message: text,
    };
    const channel: GroupChannel = await getGroupChannel(channelUrl);

    sendMessage(channel, message);
  };

  return (
    <div className="flex flex-col h-full">
      <section className="bg-white w-full h-16 p-3">header</section>

      <section className="p-2 flex-grow bg-gray-100">
        {loading && <h1>No Message</h1>}
        {allMessages.map((message) => (
          <MessageComponent message={message} />
        ))}
      </section>

      <section className="bg-white w-full h-16 p-3">
        <input
          className="h-full border outline-none rounded-md w-[300px] p-3 text-sm"
          placeholder="write a message"
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
        />
        <button
          className="ml-3 bg-slate-700 rounded-md text-white h-full px-4"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </section>
    </div>
  );
};

export default ChannelChat;
