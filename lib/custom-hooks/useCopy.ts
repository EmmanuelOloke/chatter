import { useState } from 'react';

const useCopy = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const copyFormattedMdImageLink = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return { copyFormattedMdImageLink, isCopied };
};

export default useCopy;
