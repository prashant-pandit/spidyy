/* global google */
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";

import Spiderfy from "./Spiderfy";
import CustomMarker from "./CustomMarker";

const Map = withScriptjs(
  withGoogleMap(({ zoom, center }: any) => (
    <GoogleMap
      defaultZoom={zoom}
      defaultCenter={{
        lat: center.lat,
        lng: center.lng
      }}
    >
      <Spiderfy>
        <CustomMarker
          position={{ lat: -38.132245, lng: 144.2994245 }}
          title="Melbourne"
        />
        <CustomMarker
          position={{ lat: -38.132245, lng: 144.2994245 }}
          title="Geelong"
        />
        <CustomMarker
          position={{ lat: -38.132245, lng: 144.2994245 }}
          title="Geelong"
        />
        <CustomMarker
          position={{ lat: -38.132245, lng: 144.2994245 }}
          title="Geelong"
        />
      </Spiderfy>
    </GoogleMap>
  ))
);

export default Map;
