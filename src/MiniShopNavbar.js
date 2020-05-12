import React from "react";
import "./MiniShopNavbar.css";

const MiniShopNavbar = ({
  onTclick,
  onPclick,
  onSclick,
  onColorBclick,
  onColorYclick,
  onColorPclick,
}) => {
  return (
    <nav className="minishop__nav">
      <li onClick={onTclick}>
        <img className="blue__t" src={require("./img/blue_t.png")} alt="" />
      </li>
      <li onClick={onPclick}>
        <img className="blue__p" src={require("./img/blue_p.png")} alt="" />
      </li>
      <li onClick={onSclick}>
        <img className="blue__s" src={require("./img/blue_s.png")} alt="" />
      </li>
      <li onClick={onColorBclick}>
        <button className="btn__blue">Blue</button>
      </li>
      <li onClick={onColorYclick}>
        <button className="btn__yellow">Yellow</button>
      </li>
      <li onClick={onColorPclick}>
        <button className="btn__pink">Pink</button>
      </li>
    </nav>
  );
};

export default MiniShopNavbar;
