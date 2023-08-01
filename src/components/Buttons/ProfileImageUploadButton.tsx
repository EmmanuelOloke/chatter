'use client';

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import '@uploadthing/react/styles.css';

import { UploadButton } from '../../utils/uploadthing';

import React, { useState } from 'react';
import { Link } from '@chakra-ui/react';

interface ProfileImageUploadButtonProps {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileImageUploadButton: React.FC<ProfileImageUploadButtonProps> = ({ setImageUrl }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="profileImage"
        onClientUploadComplete={(res) => {
          if (res) {
            // Do something with the response
            setImageUrl(res[0].fileUrl);
            const json = JSON.stringify(res);
            console.log(json);
          }
          //   alert('Upload Completed');
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
};

export default ProfileImageUploadButton;
