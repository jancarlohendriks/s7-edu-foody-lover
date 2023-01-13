import React from "react";

const DishCard = ({ title, paragraph, drink, starter, dessert }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <ul>
        <li>{drink}</li>
        <li>{starter}</li>
        <li>{dessert}</li>
      </ul>
    </article>
  );
};

export default DishCard;
