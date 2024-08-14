import React from 'react';
import Avatars from './Avatars';

function Menu() {
  return (
    <div className="w-2/5 max-w-72 h-screen bg-gray-700 right-0 absolute overflow-x-hidden">
      {' '}
      <Avatars name="Avatar 1" id="15231" />
      <Avatars name="Avatar 1" id="15231" />
      <Avatars name="Avatar 1" id="15231" />
    </div>
  );
}

export default Menu;
