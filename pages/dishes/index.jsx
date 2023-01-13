import { useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import dishes from "./dishes";
import drinks from "./drinks";
import starters from "./starters";
import desserts from "./desserts";

export default function Dishes() {
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
    <DefaultLayout>
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
      </div>
    </DefaultLayout>
  );
}
