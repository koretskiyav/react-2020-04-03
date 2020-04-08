import React from 'react';
import Menu from './menu';

export default function Restaurant(props) {
  return (
    <div>
      <Menu restaurant={props.restaurant} />
      {/* <Reviews /> */}
    </div>
  );
}
