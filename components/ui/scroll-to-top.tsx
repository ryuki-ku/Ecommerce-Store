import { useRouter } from 'next/router';
import React from 'react';

function ScrollToTopOnRouteChange() {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return null;
}

export default ScrollToTopOnRouteChange;
