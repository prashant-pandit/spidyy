// ts-disable
import React from "react";
import { render } from "react-dom";
import Map from "./Map";
import "./styles.css";

const App = () => {
  return (
    <Map
      center={{ lat: -34.9923319, lng: 148.2252427 }}
      zoom={4}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZulZuS9VscELy0D0-5KmxQ8r2UR0-smk"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `420px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

render(<App />, document.getElementById("root"));
