import { useContext, useCallback, useState } from 'react';
import { GET_GEO_IP } from '../api';
import { SearchContext } from '../contexts/SearchContext';

const useSearch = () => {
  const { info, setInfo } = useContext(SearchContext);
  const [loading, setLoading] = useState(null);

  const request = useCallback(
    async (value) => {
      try {
        setLoading(true);
        const response = await fetch(GET_GEO_IP(value));
        const json = await response.json();
        setInfo(json);
        console.log('requisição feita');
      } catch (e) {
        console.log('Um erro ocorreu: ' + e);
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
