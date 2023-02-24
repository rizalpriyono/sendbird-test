import { UserMessage } from '@sendbird/chat/message';

interface IMessageProps {
  message: UserMessage;
}

const MessageComponent = ({ message }: IMessageProps) => {
  return (
    <div className="flex my-3">
      <div className={`flex gap-2 items-end`}>
        <div className="p-2 px-3 rounded-lg inline-block shadow-md bg-white">
          <p className="text-xs text-gray-400">{message?.sender?.nickname}</p>
          {message?.message}
        </div>
        <p className="text-xs text-gray-500 tracking-wider">
          {new Date(message.createdAt).toLocaleTimeString('en-GB', {
            timeZone: 'Asia/Jakarta',
          })}
        </p>
      </div>
    </div>
  );
};

export default MessageComponent;
