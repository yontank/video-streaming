import React from 'react';

import { UserRound } from 'lucide-react';

import { User } from '../../types';

function Avatars({ name }: User) {
  return (
    <div className="dropdown dropdown-bottom w-11/12 h-36 my-2 ">
      <div
        role="button"
        className="my-3 flex flex-col items-center justify-evenly m-auto  w-11/12  h-36 rounded-3xl bg-secondary hover:brightness-75 duration-150"
        tabIndex={0}
      >
        <div className="bg-purple-950 w-max m-auto rounded-full p-4">
          <UserRound size={60} />
        </div>
        <h4 className="text-white  text-center pb-2">{name}</h4>
      </div>

      <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li>
          <a href="#i">Get User ID </a>
        </li>
        <li>Remove User</li>
        <li>Make Admin</li>
        <li>Make Moderator</li>
        <li>Kick User</li>
        <li>Ban User</li>
      </ul>
    </div>
  );
}

export default Avatars;
