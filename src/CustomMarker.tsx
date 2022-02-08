import React, { Ref } from "react";
import { Marker } from "react-google-maps";

function CustomMarker(props: any, ref: any) {
  return <Marker ref={ref} {...props} />;
}

export default React.forwardRef(CustomMarker);
