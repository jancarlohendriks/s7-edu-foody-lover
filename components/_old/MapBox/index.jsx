import * as React from "react";
import Map from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamFuY2FybG9mb250eXMiLCJhIjoiY2xjdXIxajIzMGJvaDN3bnZ0cm9jZGN3ZSJ9.8D1ndV2TSfbWyNfHfZEq9Q"; // Set your mapbox token here

export default function MapView() {
  return (
    <Map
      id="mymap"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  );
}

// import ReactMapGL from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// const state = {
//   viewport: {
//     width: "100vw",
//     height: "100vh",
//     latitude: 41.5868,
//     longitude: -93.625,
//     zoom: 13,
//   },
// };

// const LNG = -70.9;
// const LAT = 42.35;
// const ZOOM = 9;

// const MapBox = ({ lng = LNG, lat = LAT, zoom = ZOOM }) => {
//   return (
//     <ReactMapGL
//       initialViewState={state}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//       mapboxAccessToken="pk.eyJ1IjoiamFuY2FybG9mb250eXMiLCJhIjoiY2xjdXIxajIzMGJvaDN3bnZ0cm9jZGN3ZSJ9.8D1ndV2TSfbWyNfHfZEq9Q"
//     />
//   );
// };

// export default MapBox;
