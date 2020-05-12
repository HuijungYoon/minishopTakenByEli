import React, { useState, useEffect } from "react";
import MiniShopTemplate from "./MiniShopTemplate";
import MiniShopNavbar from "./MiniShopNavbar";
import MiniShopList from "./MiniShopList";
import { clothsArr } from "./asset/ClothsList";
import { useCallback } from "react";

function App() {
  const [clothsItemList, setClothsItemList] = useState(clothsArr);

  const onLogoClick = useCallback(() => {
    setClothsItemList(clothsArr);
  }, [clothsArr]);

  const onTclick = useCallback(() => {
    let onlyTshirt = clothsArr.filter((x) => x.type === "t");
    setClothsItemList(onlyTshirt);
  }, [clothsArr]);

  const onPclick = useCallback(() => {
    let onlyPants = clothsArr.filter((x) => x.type === "p");
    setClothsItemList(onlyPants);
  }, [clothsArr]);

  const onSclick = useCallback(() => {
    let onlySkirt = clothsArr.filter((x) => x.type === "s");
    setClothsItemList(onlySkirt);
  }, [clothsArr]);

  const onColorBclick = useCallback(() => {
    let onlyBlue = clothsArr.filter((x) => x.color === "blue");
    setClothsItemList(onlyBlue);
  }, [clothsArr]);

  const onColorYclick = useCallback(() => {
    let onlyYellow = clothsArr.filter((x) => x.color === "yellow");
    setClothsItemList(onlyYellow);
  }, [clothsArr]);

  const onColorPclick = useCallback(() => {
    let onlyPink = clothsArr.filter((x) => x.color === "pink");
    setClothsItemList(onlyPink);
  }, [clothsArr]);

  return (
    <MiniShopTemplate onLogoClick={onLogoClick}>
      <MiniShopNavbar
        onTclick={onTclick}
        onPclick={onPclick}
        onSclick={onSclick}
        onColorBclick={onColorBclick}
        onColorYclick={onColorYclick}
        onColorPclick={onColorPclick}
      />
      <MiniShopList clothsItemList={clothsItemList} />
    </MiniShopTemplate>
  );
}

export default App;
