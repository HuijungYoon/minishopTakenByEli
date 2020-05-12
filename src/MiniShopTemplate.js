import React from "react";
import "./MiniShopTemplate.css";
const MiniShopTemplate = ({ children, onLogoClick }) => {
  return (
    <div className="MiniShopTemplate">
      <img
        className="logo"
        onClick={onLogoClick}
        src={require("./img/logo.png")}
      />
      <div className="content">{children}</div>
    </div>
  );
};

export default MiniShopTemplate;
