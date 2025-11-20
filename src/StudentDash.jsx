import React from "react";
import { courses, states } from "./student";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {states.map((state, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 ">
              <div className="flex items-center">
                <div className="text-2xl mr-4">{state.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{state.label}</p>
                  <h1 className="text-2xl text-gray-800 font-bold">
                    {state.value}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* main Content Gride */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 ">
              <h1 className="text-lg font-semibold text-gray-800 mb-4">
                Course Progress
              </h1>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-gray-800">
                        {course.name}
                      </h3>
                      <span className="text-gray-600 text-sm">
                        {course.progress}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-${course.color}-500`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-gray-500">
                        Next: {course.nextLesson}
                      </span>
                      <span className="text-gray-500">{course.instructor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* side bar */}
          <div className="space-y-6">
            <div>
              <h1>Up Coming Assignment</h1>
            </div>
            <div>
              <h1>Announcements</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
