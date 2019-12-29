import React from 'react';

const Buttons = ({ menus }) => {

  return (
    <span>{menus.map((menu) =>
    <button className="menuButton" key={menus.indexOf(menu)}>Menu {menu}</button>)}</span>
  )

};

export default Buttons;