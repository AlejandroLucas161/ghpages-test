import React, { useState } from 'react';
import Item from '../Item/Item';

import './ItemList.styles.css';

const ItemList = ({ items }) => {
  return (
    <div className='items'>
      {items.map(item => (
        <Item {...item} />
      ))}
    </div>
  )
}

export default ItemList;