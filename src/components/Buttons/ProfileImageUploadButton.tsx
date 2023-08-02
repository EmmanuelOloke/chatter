'use client';

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import '@uploadthing/react/styles.css';

import { UploadButton } from '../../utils/uploadthing';

import React from 'react';

interface ProfileImageUploadButtonProps {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileImageUploadButton: React.FC<ProfileImageUploadButtonProps> = ({ setImageUrl }) => {
  return (
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
  );
};

export default ProfileImageUploadButton;
