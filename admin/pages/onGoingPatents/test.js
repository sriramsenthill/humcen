import Link from 'next/link';
import { useState } from 'react';

const LoadComponentLink = () => {
  const [isComponentLoaded, setComponentLoaded] = useState(false);

  const loadComponent = () => {
    import('./NewComponent').then(() => {
      setComponentLoaded(true);
    });
  };

  return (
    <div>
      <Link href="#" onClick={loadComponent}>
        Load Component
      </Link>
      {isComponentLoaded && <NewComponent />}
    </div>
  );
};

export default LoadComponentLink;
