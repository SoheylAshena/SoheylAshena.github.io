import React from "react";

const Loading = () => {
  return (
    <div className="absolute right-0 top-0 flex h-screen w-full items-center justify-center">
      <img className="h-32 w-32" src="loading.svg" alt="loading indicator" />
    </div>
  );
};

export default Loading;
