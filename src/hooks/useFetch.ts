import { useEffect, useRef, useState } from "react";
import fecher from "../services/fecher";

type FetchState<T> = {
  isLoading: boolean;
  errors: Error | null;
  data: T | null;
};

const useFetch = <T>(url: string, options: RequestInit = {}) => {
  const isMounted = useRef(true);
  const [state, setState] = useState<FetchState<T>>({
    isLoading: false,
    errors: null,
    data: null,
  });

  useEffect(() => {
    if (isMounted.current) {
      (async () => {
        setState((prevState) => ({
          ...prevState,
          isLoading: true,
        }));
        try {
          const data: T = await fecher<T>(url, options);
          setState({
            isLoading: false,
            errors: null,
            data,
          });
        } catch (error) {
          setState({
            isLoading: false,
            errors: error as Error,
            data: null,
          });
        }
      })();
    }

    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
  };
};

export default useFetch;
