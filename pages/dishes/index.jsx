import dynamic from "next/dynamic";
import { useState } from "react";
import { MapProvider } from "react-map-gl";

import DefaultLayout from "@/layouts/DefaultLayout";

import dishes from "./data/dishes";
import drinks from "./data/drinks";
import starters from "./data/starters";
import desserts from "./data/desserts";

const DishesMapWithNoSSR = dynamic(() => import("@/components/DishesMap"), {
  ssr: false,
});
import { NavigateButton } from "@/components/DishesMap";
import DishCard from "@/components/DishCard";

export default function Dishes() {
  const [currentDish, setCurrentDish] = useState(0);
  const [coordinates, setCoordinates] = useState([
    dishes[currentDish].location.lat,
    dishes[currentDish].location.lng,
  ]);

  const handlePreviousDish = () => {
    const previousDish = currentDish - 1;
    if (previousDish > -1) {
      setCurrentDish(previousDish);
      setCoordinates([
        dishes[previousDish].location.lat,
        dishes[previousDish].location.lng,
      ]);
    }
  };

  const handleNextDish = () => {
    const nextDish = currentDish + 1;
    if (nextDish < dishes.length) {
      setCurrentDish(nextDish);
      setCoordinates([
        dishes[nextDish].location.lat,
        dishes[nextDish].location.lng,
      ]);
    }
  };

  return (
    <div>
      <DefaultLayout>
        <MapProvider>
          <DishesMapWithNoSSR coordinates={coordinates} />
          <div>asdasd</div>
        </MapProvider>
        <DishCard
          title={dishes[currentDish].title}
          paragraph={dishes[currentDish].paragraph}
          drink={drinks[dishes[currentDish].recommendations.drink].title}
          starter={starters[dishes[currentDish].recommendations.starter].title}
          dessert={desserts[dishes[currentDish].recommendations.dessert].title}
        />
        <div>
          <button onClick={handlePreviousDish}>Previous</button>
          <button onClick={handleNextDish}>Next</button>
          {/* <button onClick={newlocation}>New Location</button> */}
        </div>
      </DefaultLayout>
    </div>
  );
}
