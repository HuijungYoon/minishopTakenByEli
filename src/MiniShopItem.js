import React from "react";

const MiniShopItem = ({ cloths }) => {
  const { id, image, gendeAndSize } = cloths;

  return (
    <div className="clothsList" id={id}>
      <img className="clothsList__img" src={image} />
      <span className="clothsList__genderAndSize">{gendeAndSize}</span>
    </div>
  );
};

export default MiniShopItem;
