import dynamic from "next/dynamic";
import { useState } from "react";
import { MapProvider } from "react-map-gl";

import DefaultLayout from "@/layouts/DefaultLayout";
import dishes from "./data/dishes";
import drinks from "./data/drinks";
import starters from "./data/starters";
import desserts from "./data/desserts";

const ComponentWithNoSSR = dynamic(() => import("./Map"), { ssr: false });
import { NavigateButton } from "./Map";

const Dishes = () => {
  const [currentDish, setCurrentDish] = useState(0);

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
        <ComponentWithNoSSR />
        <div>asdasd</div>
        <NavigateButton />
      </MapProvider>

      <DefaultLayout>
        <article>
          <h2>{dishes[currentDish].title}</h2>
          <p>{dishes[currentDish].paragraph}</p>
          <ul>
            <li>{drinks[dishes[currentDish].recommendations.drink].title}</li>
            <li>
              {starters[dishes[currentDish].recommendations.starter].title}
            </li>
            <li>
              {desserts[dishes[currentDish].recommendations.dessert].title}
            </li>
          </ul>
        </article>
        <div>
          <button onClick={handlePreviousDish}>Previous</button>
          <button onClick={handleNextDish}>Next</button>
          {/* <button onClick={newlocation}>New Location</button> */}
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Dishes;
