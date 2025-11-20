import React from "react";

export const StudentDash = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* header section */}
        <header className="bg-white p-6 rounded-2xl mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl text-gray-800">
                Welcome Back, Student!
              </h1>
              <p className="text-gray-600">
                Here`s what`s happening with your courses today
              </p>
            </div>
            {/* all icons  */}
            <div className="flex items-center space-x-4">
              {/* Ball icons */}
              <div className="relative">
                <span className="h-2 w-2 rounded-full bg-red-500 absolute top-0 right-0 block ring-2 ring-white"></span>
                <button className="p-2 text-gray-400 hover:text-amber-900">
                  🔔
                </button>
              </div>
              <div className="w-10 h-10 flex items-center justify-center font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full">
                S 
              </div>
            </div>
          </div>
        </header>
        {/* state dashbroad  */}
        <div>
          
        </div>
        
      </div>
    </div>
  );
};
