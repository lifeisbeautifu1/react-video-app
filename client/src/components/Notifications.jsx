import { useAppContext } from '../context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useAppContext();
  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen modal flex justify-center items-center ${
        call.isReceivingCall && !callAccepted ? '' : 'hidden'
      }`}
    >
      <div className="bg-white p-8 flex h-auto flex-col justify-center items-center gap-4 rounded shadow-lg">
        <h1 className="font-bold text-lg text-gray-600">
          {call.name} is calling:
        </h1>
        <button
          className="bg-blue-500 transition duration-300 hover:bg-blue-400 rounded py-2 px-3 text-white w-full"
          onClick={answerCall}
        >
          Answer
        </button>
      </div>
    </div>
  );
};

export default Notifications;
