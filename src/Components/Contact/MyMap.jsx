import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "35vw",
  height: "70vh",
  borderRadius: "5% 25%",
};

const center = {
  lat: 39.611494,
  lng: 22.428341,
};
const api_key = process.env.REACT_APP_API_KEY;

export default function MyMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: api_key,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} zoom={9} center={center}>
      <MarkerF position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}
