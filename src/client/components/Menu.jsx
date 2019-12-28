import React from 'react';
import SingleItem from './SingleItem.jsx';

const Menu = ({ menu }) => (

  <div className='list'>
    {props.menuList.map((itemList) =><SingleItem key={itemList._id} itemList={itemList} />)}

  </div>
);

export default Menu;