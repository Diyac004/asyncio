import React from "react";

const page = () => {
  return (
    < div className="flex flex-col items-center justify-center h-screen bg-white">
        <h2 className="text-3xl font-bold mb-4">Meeting Room</h2>
        <div className="flex flex-col items-center w-full max-w-4xl">
          {/* Video component */}
          <div className="bg-black/20 h-64 w-full mb-4 rounded-lg blur-sm"></div>
          {/* Controls */}
          <div className="flex space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              End Meeting
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded">
              Mute
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded">
              Stop Video
            </button>
          </div>
        </div>
      </div>
  );
};

export default page;
