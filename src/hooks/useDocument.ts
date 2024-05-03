import { useEffect, useRef } from "react";

const useDocument = (title: string | null = null) => {
  const titleRef = useRef(document.title);
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      document.title = titleRef.current;
    };
  }, []);
  useEffect(() => {
    document.title = title ? title : titleRef.current;
  }, [title]);
};

export default useDocument;
