import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';

import { homeMarker } from 'components/RMap/config';
import { Wrap } from './styled';

RMap.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  merchantPos: PropTypes.arrayOf(PropTypes.number),
  renderFunctions: PropTypes.arrayOf(PropTypes.func),
};

export function RMap({
  height = 600,
  width,
  fullWidth,
  renderFunctions = [],
  merchantPos = [],
}) {
  return (
    <Wrap
      height={height}
      width={width}
      fullWidth={fullWidth}
    >
      <MapContainer
        style={{
          position: 'relative',
          display: 'block',
          width: '100%',
          height: '100%',
        }}
        center={merchantPos}
        zoom={13}
        scrollWheelZoom
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          icon={homeMarker}
          position={merchantPos}
        />
        {renderFunctions.length ? renderFunctions.map((func) => func()) : null}
      </MapContainer>
    </Wrap>
  );
}
