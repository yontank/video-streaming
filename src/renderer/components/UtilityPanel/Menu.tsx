import React from 'react';
import {
  AirplayIcon,
  CrownIcon,
  SendHorizonalIcon,
  // StarIcon,
  XIcon,
} from 'lucide-react';
import Icons from './Icons';

function Menu() {
  return (
    <div className="h-16 w-2/4 bg-secondary rounded-2xl flex justify-center items-center gap-x-6">
      <Icons
        placeholder="Assign Room Owner"
        onClick={() => {}}
        Icon={CrownIcon}
      />
      <Icons
        placeholder="Copy Link"
        onClick={() => {}}
        Icon={SendHorizonalIcon}
      />
      {/* <Icons placeholder="Mute" onClick={() => {}} Icon={StarIcon} /> */}
      <Icons placeholder="Share Media" onClick={() => {}} Icon={AirplayIcon} />
      <Icons
        placeholder="Exit"
        onClick={() => {}}
        Icon={XIcon}
        iconType="danger"
      />
    </div>
  );
}

export default Menu;
