import React from "react";
import "./MiniShopList.css";
import MiniShopItem from "./MiniShopItem";

const MiniShopList = ({ clothsItemList }) => {
  return (
    <div className="MiniShopList">
      {clothsItemList.map((cloths) => (
        <MiniShopItem cloths={cloths} />
      ))}
    </div>
  );
};

export default MiniShopList;
