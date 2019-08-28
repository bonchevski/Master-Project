import React from "react";
import "./menu-item.styles.scss";
// imageURL goes in to backgroundImage as $imageUrl
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="sub-title">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;