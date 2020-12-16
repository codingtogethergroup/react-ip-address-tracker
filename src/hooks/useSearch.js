import { useContext, useCallback, useState } from 'react';
import { GET_GEO_IP } from '../api';
import { SearchContext } from '../contexts/SearchContext';

const useSearch = () => {
  const { info, setInfo } = useContext(SearchContext);
  const [loading, setLoading] = useState(null);

  const request = useCallback(
    async (type, value) => {
      try {
        setLoading(true);
        const response = await fetch(GET_GEO_IP(type, value));
        const json = await response.json();
        setInfo(json);
      } catch (e) {
        console.log('Error: ' + e);
      } finally {
        setLoading(false);
      }
    },
    [setInfo],
  );

  return {
    loading,
    request,
    info,
  };
};

export default useSearch;
