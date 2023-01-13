import { useEffect, useRef } from "react";

// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// const NewMap = ({ lat, lng }) => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   useEffect(() => {
//     mapboxgl.accessToken = process.env.MAPBOX_TOKEN ?? "";

//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/light-v10",
//       center: [lat, lng], // center map on Chad
//       zoom: 10,
//     });
//   }, [lat, lng]);

//   return (
//     <main>
//       <div id="myMap" className="map-container" ref={mapContainer} />
//       <div
//         onClick={() =>
//           map.current.flyTo({
//             center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
//             essential: true, // this animation is considered essential with respect to prefers-reduced-motion
//           })
//         }
//       >
//         Hello
//       </div>
//     </main>
//   );
// };

// export default NewMap;

import { Map, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import dishes from "pages/dishes/data/dishes";

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

const state = {
  latitude: dishes[0].location.lat,
  longitude: dishes[0].location.lng,
  zoom: 9,
};

export default function DishesMap({ lat, lng }) {
  const { myMap } = useMap();
  myMap && myMap.flyTo({ center: [lat, lng] });
  // console.log(myMap);

  // useEffect(() => {
  //   myMap.flyTo({ center: [lat, lng] });
  // }, [lat, lng, myMap]);

  return (
    <Map
      id="myMap"
      initialViewState={state}
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  );
}

export function NavigateButton({ center = [-122.4, 37.8] }) {
  const { myMap } = useMap();

  const onClick = () => {
    myMap.flyTo({ center: center });
  };

  return <button onClick={onClick}>Go</button>;
}
