import React from "react";

function MenuItem({ src, title }) {
  return (
    <li style={{ color: "white" }}>
      <img height={20} src={src} /> {title}
    </li>
  );
}

export default MenuItem;
