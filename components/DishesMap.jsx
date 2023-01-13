import { Map, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

export default function DishesMap() {
  return (
    <Map
      id="myMap"
      initialViewState={{
        latitude: 41.5868,
        longitude: -93.625,
        zoom: 14,
      }}
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
