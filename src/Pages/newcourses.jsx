import React from "react";
import { Link } from "react-router-dom";

function NewCourses() {
    return (
        <div>
            <div className="flex justify-center items-center bg-red-500 h-42">
                <p className="text-white text-3xl md:text-5xl font-bold">
                    <strong>Live Course</strong>
                </p>
            </div>

            <div className="bg-white p-5 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 justify-items-center">
                    <LiveCourseCart />
                    <LiveCourseCart />
                    <LiveCourseCart />
                    <LiveCourseCart />
                    <LiveCourseCart />
                    <LiveCourseCart />
                </div>
            </div>
        </div>
    );
}

export default NewCourses;

function LiveCourseCart() {
    const title = "1-premium-spoken-english-course-live-course";

    return (
        <div className="w-full max-w-sm md:w-82.75 h-auto md:h-105 bg-gray-100 border border-gray-300 rounded-xl">
            <img
                src="https://appx-content-v2.classx.co.in/paid_course3/2025-09-26cf9a205a-7c7c-40ec-a56e-297a92edfd65.jpg"
                className="w-full md:w-83 h-50 rounded-t-xl object-cover"
            />

            <div className="p-5">
                <p className="font-bold text-base text-black">
                    Premium Spoken English Course
                </p>

                <p className="text-sm text-black py-3">
                    🌟 Basic to Advanced Spoken English Course 🌟 🗓️ Course Duration: 12
                    Months .
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 -mt-3 gap-2">
                    <div className="flex gap-4">
                        <p className="font-bold text-xl text-black line-through">₹5,000</p>
                        <p className="font-bold text-xl text-black">₹2,499</p>
                    </div>

                    <span className="rounded-full text-center text-sm text-green-600 bg-green-300 h-7 w-17">
                        51% off
                    </span>
                </div>

                <Link to={`/new-courses/${title}`}>
                    <button className="bg-red-500 w-full rounded-xl text-white font-bold text-sm mt-3 h-10">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}
