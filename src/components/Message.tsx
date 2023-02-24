import { UserMessage } from '@sendbird/chat/message';

interface IMessageProps {
  message: UserMessage;
}

const MessageComponent = ({ message }: IMessageProps) => {
  const renderMessageType = (type: string | undefined) => {
    if (type == 'NEGO_REQUEST') {
      return (
        <p className="py-px px-2 bg-blue-200 text-blue-500 rounded-md ml-3">
          Nego diajukan{' '}
        </p>
      );
    }
  };

  return (
    <div className="flex my-3">
      <div className={`flex gap-2 items-end`}>
        <div className="p-2 px-3 rounded-lg inline-block shadow-md bg-white">
          <div className="flex text-xs">
            <p className="text-gray-400">{message?.sender?.nickname}</p>
            {renderMessageType(message.customType)}
          </div>
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
