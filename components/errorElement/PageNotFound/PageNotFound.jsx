import React from "react";

const PageNotFound = () => {
  return (
    <div className="w-full h-[85vh] flex flex-col justify-center items-center px-10 gap-2">
      <title>Error | Nilandu</title>
      <div className="text-center text-xs">
        <h1 className="text-7xl font-extrabold text-base-content/90">404</h1>
        <p className="text-2xl">Page not found!</p>
        <p className="text-base-content/70">
          The page you are looking for is not available
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
