import { useEffect, useState } from 'react';

type HookResult = string | undefined

export const useSearchParams = (key: string): HookResult => {
  const [value, setValue] = useState<HookResult>();

  useEffect(() => {
    const handleLocationChange = () => {
      const queryParams = new URLSearchParams(window.location.search);
      setValue(queryParams.get(key) || undefined);
    };

    handleLocationChange();

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [key]);

  return value;
};
