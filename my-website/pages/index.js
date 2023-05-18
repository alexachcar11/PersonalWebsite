import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePageRedirect = () => {
    const router = useRouter();
  
    useEffect(() => {
      router.push('/home-page');
    }, []);
  
    return null;
  };
  
  export default HomePageRedirect;