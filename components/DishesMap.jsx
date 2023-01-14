import Image from "next/image";
import { Map, useMap, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

const state = {
  zoom: 9,
};

export default function DishesMap({ coordinates }) {
  const { myMap } = useMap();
  // myMap && myMap.setCenter(coordinates);
  myMap && myMap.flyTo({ center: coordinates });

  return (
    <Map
      id="myMap"
      initialViewState={state}
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker
        longitude={coordinates[0]}
        latitude={coordinates[1]}
        anchor="bottom"
      >
        <Image
          src={"/images/marker-icon-2x.png"}
          alt=""
          width={50 / 2}
          height={82 / 2}
        />
      </Marker>
    </Map>
  );
}
