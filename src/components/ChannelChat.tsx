import {
  ChannelProvider,
  useChannelContext,
} from '@sendbird/uikit-react/Channel/context';
import MessageComponent from './Message';

import { FormEvent, useEffect, useState } from 'react';
import { useSendbirdStateContext, sendbirdSelectors } from '@sendbird/uikit-react';
import { UserMessageCreateParams } from '@sendbird/chat/message';
import { CoreMessageType } from 'SendbirdUIKitGlobal';
import TypingIndicator from '@sendbird/uikit-react/Channel/components/TypingIndicator';
import Channel from '@sendbird/uikit-react/Channel';

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
  const { allMessages, channelUrl, currentGroupChannel } = useChannelContext();
  const context = useSendbirdStateContext();

  const sendMessage = sendbirdSelectors.getSendUserMessage(context);
  const getGroupChannel = sendbirdSelectors.getGetGroupChannel(context);

  const handleSendMessage = async () => {
    const message: UserMessageCreateParams = {
      message: text,
      // customType: 'NEGO_REQUEST_BUYER',
    };
    const channel = await getGroupChannel(channelUrl);
    sendMessage(channel, message);

    // currentGroupChannel?.sendUserMessage(message)
  };

  const handleInputMessage = (event: FormEvent<HTMLInputElement>) => {
    currentGroupChannel?.startTyping();
    setText(event.currentTarget.value);
  };

  return (
    <div className="flex flex-col h-full">
      <section className="bg-white w-full h-16 p-3">
        header
        <TypingIndicator />
      </section>

      <section className="p-2 flex-grow bg-gray-100">
        {allMessages.map((message: CoreMessageType, idx) => (
          <MessageComponent message={message} key={idx} />
        ))}
      </section>

      <section className="bg-white w-full h-16 p-3">
        <input
          className="h-full border outline-none rounded-md w-[300px] p-3 text-sm"
          placeholder="write a message"
          value={text}
          onChange={handleInputMessage}
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
