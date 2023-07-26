import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const useLogOut = () => {
  const router = useRouter();

  const logOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' });
    router.push(data.url);
  };

  return { logOut };
};

export default useLogOut;
