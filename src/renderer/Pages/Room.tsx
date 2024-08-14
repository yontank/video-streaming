import React from 'react';
import UserMenu from '../components/UsersMenu/Menu';
import UtilityPanel from '../components/UtilityPanel/Menu';
import ShareScreen from '../components/ShareScreen/ShareScreen';

function Room() {
  return (
    <div className="w-auto h-screen bg-primary flex overflow-y-hidden">
      <UserMenu />
      <div className="overflow-hidden h-screen flex gap-5 items-center flex-col mt-4 w-[calc(60%-(18rem-40%))]">
        <ShareScreen />
        <UtilityPanel />
      </div>
    </div>
  );
}

export default Room;
