import { USERID } from '@/constants';
import { useProductStore } from '@/store/product';
import { GroupChannel, GroupChannelCreateParams } from '@sendbird/chat/groupChannel';
import { UserMessageCreateParams } from '@sendbird/chat/message';
import { sendbirdSelectors, useSendbirdStateContext } from '@sendbird/uikit-react';
import { useRouter } from 'next/router';
import React from 'react';

export default function Product() {
  const router = useRouter();
  const context = useSendbirdStateContext();
  const setProduct = useProductStore((state) => state.setProduct);

  const createGroupChannel = sendbirdSelectors.getCreateGroupChannel(context);
  const sendMessage = sendbirdSelectors.getSendUserMessage(context);

  const product = {
    name: 'Tas Sekolah',
    imageUrl: 'https://source.unsplash.com/random/',
    price: 200000,
  };

  const handleCreateChannel = async () => {
    const params: GroupChannelCreateParams = {
      invitedUserIds: ['toko-c', USERID],
      channelUrl: `peer-chat-${USERID}-toko-c`,
      isDistinct: true,
    };

    const channel: GroupChannel = await createGroupChannel(params);

    setProduct(product);
    router.push('/chat');
  };
  return (
    <div className="p-4">
      <button className="p-2 bg-blue-200" onClick={handleCreateChannel}>
        Tanya Product
      </button>
    </div>
  );
}
