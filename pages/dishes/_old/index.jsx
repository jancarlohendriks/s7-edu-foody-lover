import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import { MapProvider, Map, useMap } from "react-map-gl";
import Controls from "@/components/MapBox/controls";

import DefaultLayout from "@/layouts/DefaultLayout";
import dishes from "./data/dishes";
import drinks from "./data/drinks";
import starters from "./data/starters";
import desserts from "./data/desserts";

function NavigateButton() {
  const { mymap } = useMap();

  const onClick = () => {
    mymap.flyTo({ center: [-122.4, 37.8] });
  };

  return <button onClick={onClick}>Go</button>;
}

export default function Dishes() {
  const [currentDish, setCurrentDish] = useState(0);
  // const [lng, setLng] = useState(-50.9);
  // const [lat, setLat] = useState(42.35);
  // const [zoom, setZoom] = useState(9);

  const MapBox = dynamic(() => import("@/components/MapBox"), {
    ssr: false,
    loading: () => <p>A map is loading</p>,
  });

  const newlocation = () => {};

  const handlePreviousDish = () => {
    const previousDish = currentDish - 1;
    if (previousDish > -1) setCurrentDish(previousDish);
  };

  const handleNextDish = () => {
    const nextDish = currentDish + 1;
    if (nextDish < dishes.length) setCurrentDish(nextDish);
  };

  return (
    <DefaultLayout>
      <div style={{ width: "500px", height: "300px" }}>
        <MapProvider>
          <NavigateButton />
          <Map />
        </MapProvider>
        {/* <MapProvider>
          <MapBox id="myMapA" />
          <NavigateButton />
        </MapProvider> */}
      </div>
      <article>
        <h2>{dishes[currentDish].title}</h2>
        <p>{dishes[currentDish].paragraph}</p>
        <ul>
          <li>{drinks[dishes[currentDish].recommendations.drink].title}</li>
          <li>{starters[dishes[currentDish].recommendations.starter].title}</li>
          <li>{desserts[dishes[currentDish].recommendations.dessert].title}</li>
        </ul>
      </article>
      <div>
        <button onClick={handlePreviousDish}>Previous</button>
        <button onClick={handleNextDish}>Next</button>
        <button onClick={newlocation}>New Location</button>
      </div>
    </DefaultLayout>
  );
}
