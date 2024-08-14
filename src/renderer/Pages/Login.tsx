import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary w-screen h-screen">
      <div className="py-5">
        <h1 className="font-sans text-6xl text-white text-center">
          Media Server
        </h1>
      </div>
      <div className="w-full flex justify-evenly items-center mt-10">
        <button
          type="button"
          className="bg-secondary py-2 px-9 text-white ml-5 rounded-xl"
          onClick={() => navigate('/room')}
        >
          Create Room
        </button>

        <form>
          <div>
            <label className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Join Room
            </label>
            <input
              className="bg-secondary text-white mb-9 py-3 px-3 rounded-xl"
              type="text"
              id="roomName"
              name="roomName"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
