'use client';

import usePostServer from '@/hooks/usePostServer';
import useToast from '@/hooks/useToast';
import { DocumentDuplicateIcon, PlusIcon } from '@heroicons/react/24/solid';
import Avatar, { genConfig } from 'react-nice-avatar';
import { useSelector } from 'react-redux';

export default function ContactTabSearch({ name, status, pubkey, avatarId }) {
  const { Info } = useToast();
  const { addContact } = usePostServer();

  const currentUser = useSelector((state) => state.profile.contacts);

  if (currentUser.includes(pubkey)) return null;

  const handleAddContact = async () => {
    await addContact(pubkey);
  };

  return (
    <div className="flex w-full rounded-[8px] px-[16px] py-[12px] bg-[#1C1D22]">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-[12px] items-center relative justify-between w-full">
          <div className="flex gap-[12px] items-center">
            <Avatar
              style={{ width: '2rem', height: '2rem' }}
              {...genConfig(avatarId)}
              className=""
            />

            <div className="flex flex-col justify-center">
              <p className="text-primary-white text-[14px] font-medium">
                {name}
              </p>

              <button
                className="text-[#f0f0f099] flex flex-start items-center text-[12px] hover:cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(pubkey);
                  Info('Copied to clipboard');
                }}
              >
                {pubkey.substring(0, 4) +
                  '...' +
                  pubkey.substring(pubkey.length - 4, pubkey.length)}
                <DocumentDuplicateIcon className="w-[13px] h-[13px] ml-[4px]" />
              </button>
            </div>
          </div>

          <button
            className="flex justify-center items-center p-[8px] rounded-full w-[32px]"
            style={{
              background: 'linear-gradient(90deg, #4AFF93 0%, #26FFFF 100%)',
            }}
            onClick={handleAddContact}
          >
            <PlusIcon className="h-4 w-4 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
