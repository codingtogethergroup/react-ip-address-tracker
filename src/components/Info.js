import { useEffect } from 'react';
import styled from 'styled-components';
import { GET_IP_URL } from '../api';
import useSearch from '../hooks/useSearch';
import InfoItem from './InfoItem';

const Section = styled.section`
  background-color: #fff;
  border-radius: 1rem;
  bottom: calc(-40px / 2);
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  max-width: 1110px;
  padding: 2.375rem 2rem 2.625rem;
  position: relative;
  width: 100%;
  z-index: 999;

  @media (min-width: 600px) {
    bottom: calc(-80px / 2);
  }
`;

const List = styled.ul`
  @media (min-width: 600px) {
    display: flex;
  }
`;

const Info = () => {
  const { request, info, loading } = useSearch();

  useEffect(() => {
    const getIP = async () => {
      const response = await fetch(GET_IP_URL);
      const { ip } = await response.json();
      request('ip', ip);
    };
    getIP();
  }, [request]);

  return (
    <Section>
      <List>
        <InfoItem
          title="IP Address"
          content={loading ? 'Loading...' : info.ip}
        />
        <InfoItem
          title="Location"
          content={
            loading
              ? 'Loading...'
              : `${info.location?.city}, ${info.location?.region} ${info.location?.postalCode}`
          }
        />
        <InfoItem
          title="Timezone"
          content={loading ? 'Loading...' : `UTC ${info.location?.timezone}`}
        />
        <InfoItem
          title="ISP"
          content={loading ? 'Loading...' : `${info.isp}`}
        />
      </List>
    </Section>
  );
};

export default Info;
