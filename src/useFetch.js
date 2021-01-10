import { useEffect, useState, useRef } from "react";

export const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState(({ data }) => ({ data: data, loading: true }));
    fetch(url)
      .then(res => res.text())
      .then(data => {
        if (isCurrent.current) {
          setState({ data: data, loading: false });
        }
      });
  }, [url, setState]);

  return state;
};
