import Image from "next/image";
import { Map, useMap, Source, Layer, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-122.4, 37.8] },
    },
  ],
};

const layerStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

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
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
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

export function NavigateButton({ center = [-122.4, 37.8] }) {
  const { myMap } = useMap();

  const onClick = () => {
    myMap.flyTo({ center: center });
  };

  return <button onClick={onClick}>Go</button>;
}
