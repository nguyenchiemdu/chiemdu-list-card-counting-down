import React, { useState } from "react";
import MenuItem from "./MenuItem";
import "./ListMenu.scss";

const listMenuData = [
  {
    src: "/assets/icon-menu1.png",
    title: "Dashboard",
  },
  {
    src: "/assets/icon-menu2.png",
    title: "Site Menu",
  },
  {
    src: "/assets/icon-menu1.png",
    title: "Design",
  },
  {
    src: "/assets/icon-menu2.png",
    title: "Pages",
  },
];

class ListMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "LOGIN",
      number: 0,
    };
  }

  render() {
    return (
      <div
        className="list-menu"
      >
        <ul className="ul-menu">
          {listMenuData.map((item, idx) => {
            const src = item.src;
            return <MenuItem key={idx} src={src} title={item.title} />;
          })}
        </ul>
      </div>
    );
  }
}
export default ListMenu;
