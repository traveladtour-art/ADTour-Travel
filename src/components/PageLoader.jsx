import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-5">
        {/* Spinner */}
        <div className="relative">
          <div className="w-14 h-14 rounded-full border-4 border-slate-200"></div>
          <div className="absolute inset-0 w-14 h-14 rounded-full border-4 border-sky-600 border-t-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <p className="text-slate-600 text-sm tracking-wide animate-pulse">
          Loading your journey...
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
