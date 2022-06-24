import React from 'react';
import { VideoPlayer, Sidebar, Notifications } from './components';

const App = () => {
  return (
    <div className="bg-gray-100 py-20 font-primary h-screen flex flex-col items-center gap-8 relative overflow-scroll">
      <h1 className="py-3 px-8 rounded-full shadow font-bold text-4xl text-gray-600 bg-white">
        Video Chat Application
      </h1>
      <VideoPlayer />
      <Sidebar />
      <Notifications />
    </div>
  );
};

export default App;
