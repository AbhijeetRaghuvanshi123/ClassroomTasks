import React from "react";

const SkeletonCard = () => {
  return (
    // Add fixed width and height to prevent layout shift
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white w-80 h-64">
      {/* The animate-pulse class creates the loading effect */}
      <div className="animate-pulse">
        <div className="px-6 py-4">
          {/* Placeholder for Title */}
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          {/* Placeholder for Description */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          {/* Placeholders for Tags */}
          <div className="inline-block bg-gray-300 rounded-full h-6 w-20 mr-2 mb-2"></div>
          <div className="inline-block bg-gray-300 rounded-full h-6 w-16 mr-2 mb-2"></div>
          <div className="inline-block bg-gray-300 rounded-full h-6 w-24 mr-2 mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
