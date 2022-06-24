import { useAppContext } from '../context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, call } =
    useAppContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {
        <div className="w-80 text-center">
          <h1 className="text-lg font-bold text-gray-600">{name || 'Name'}</h1>
          <video className="rounded" playsInline muted ref={myVideo} autoPlay />
        </div>
      }
      {callAccepted && !callEnded && (
        <div className="w-80 text-center">
          <h1 className="text-lg font-bold text-gray-600">
            {call.name || 'Name'}
          </h1>
          <video className="rounded " playsInline ref={userVideo} autoPlay />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
