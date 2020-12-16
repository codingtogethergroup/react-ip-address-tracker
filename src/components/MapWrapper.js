import styled from 'styled-components';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Location from '../assets/icon-location.svg';
import { SearchContext } from '../contexts/SearchContext';
import { useContext } from 'react';

const Section = styled.section`
  height: calc(100vh - 17.5rem);
  overflow: hidden;
`;

const Loading = styled.p`
  font-size: 1.125rem;
  text-align: center;
  margin-top: 6rem;
`;

const MoveMap = ({ center }) => {
  const map = useMap();
  map.setView(center, 13);
  return null;
};

const MapWrapper = () => {
  const { info } = useContext(SearchContext);

  console.log(info);

  const pointerIcon = new L.Icon({
    iconUrl: Location,
    iconRetinaUrl: Location,
  });

  return info.location ? (
    <Section>
      <MapContainer
        style={{ height: '100%' }}
        center={[info.location.lat, info.location.lng]}
        zoom={13}
        zoomControl={false}
      >
        <MoveMap center={[info.location.lat, info.location.lng]} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[info.location.lat, info.location.lng]}
          icon={pointerIcon}
        ></Marker>
      </MapContainer>
    </Section>
  ) : (
    <Loading>Loading...</Loading>
  );
};

export default MapWrapper;
