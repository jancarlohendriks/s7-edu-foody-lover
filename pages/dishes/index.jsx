import { useEffect, useRef } from "react";
import { Map, useMap } from "react-map-gl";

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
import NewMap, { NavigateButton } from "@/components/DishesMap";
import DishCard from "@/components/DishCard";

export default function Dishes() {
  const [currentDish, setCurrentDish] = useState(0);
  // const map = useRef(null);

  // useEffect(() => {
  //   console.log(map.current);
  // }, []);

  const { myMap } = useMap();

  useEffect(() => {
    console.log(myMap);
    // myMap &&
    // myMap.flyTo({
    //   center: [
    //     dishes[currentDish].location.lat,
    //     dishes[currentDish].location.lng,
    //   ],
    // });
  }, [currentDish, myMap]);

  const handlePreviousDish = () => {
    const previousDish = currentDish - 1;
    if (previousDish > -1) setCurrentDish(previousDish);
  };

  const handleNextDish = () => {
    const nextDish = currentDish + 1;
    if (nextDish < dishes.length) setCurrentDish(nextDish);
  };

  return (
    <div>
      <MapProvider>
        <DishesMapWithNoSSR
          lat={dishes[currentDish].location.lat}
          lng={dishes[currentDish].location.lng}
        />
        <div>asdasd</div>
        <NavigateButton
          center={[
            dishes[currentDish + 1].location.lat,
            dishes[currentDish + 1].location.lng,
          ]}
        />
      </MapProvider>
      {/* <NewMap
        ref={map}
        lat={dishes[0].location.lat}
        lng={dishes[0].location.lng}
      /> */}

      <DefaultLayout>
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
