import { useState } from 'react';
import { useAppContext } from '../context';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useAppContext();
  const [idToCall, setIdToCall] = useState('');
  return (
    <div className="bg-white p-8 rounded shadow-lg">
      <form className="flex gap-8" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-4 items-left md:w-60 w-40">
          <label className="font-bold text-lg text-gray-600">
            Account Info:
          </label>
          <input
            type="text"
            className="bg-gray-100 border-b-2 border-blue-500 p-2 rounded outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CopyToClipboard text={me}>
            <button className="py-2 px-3 bg-blue-500 text-white rounded font-bold cursor-pointer transition duration-200 hover:bg-blue-400 flex justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
              Copy Your Id
            </button>
          </CopyToClipboard>
        </div>
        <div className="flex flex-col items-left gap-4 md:w-60 w-40">
          <label className="font-bold text-lg text-gray-600">Make a call</label>
          <input
            type="text"
            className="bg-gray-100 p-2 rounded outline-none border-b-2 border-blue-500"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          {callAccepted && !callEnded ? (
            <button
              className="py-2 px-3 bg-red-500 text-white rounded font-bold cursor-pointer transition duration-200 hover:bg-red-400 flex justify-center items-center gap-2"
              onClick={leaveCall}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                />
              </svg>
              Hang Up
            </button>
          ) : (
            <button
              className="py-2 px-3 bg-blue-500 text-white rounded font-bold cursor-pointer transition duration-200 hover:bg-blue-400 flex justify-center items-center "
              onClick={() => callUser(idToCall)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
