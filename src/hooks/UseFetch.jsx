import { useState, useEffect } from 'react';

export default function useFetch(url, option={}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  async function fetchData(url) {
    setLoading(true);
    try {
      const res = await fetch(url, {...option});
      if (!res.ok) {
        throw new Error('Network response was not OK');
      }

      const result = await res.json();
      setData(result);
      setLoading(false);
    } catch(e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, loading, error };
};