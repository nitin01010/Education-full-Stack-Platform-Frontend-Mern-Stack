import { useState } from "react"
import { AddCourses, AllCourses } from "../components/AllCourses"

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('AllCourses')
    return (
        <div className=" flex  w-full bg-white">
            <div className=" w-[20%] text-black  border-r-2  h-screen  bg-[#f2f2f2] m-auto">
                <p className=" bg-white text-2xl py-4 font-bold text-red-500 text-center capitalize"><b>Welcome Back </b></p>
                <div className=" flex flex-col gap-4 mt-1 p-1">
                    <button onClick={() => setActiveTab('AllCourses')} className=" bg-black cursor-pointer text-white w-full h-10 shadow-md rounded-l-md ">All Courses</button>
                    <button onClick={() => setActiveTab('AddCourses')} className=" bg-black cursor-pointer text-white w-full h-10 shadow-md rounded-l-md ">Add Course</button>
                </div>
            </div>
            <div className=" w-[90%] bg-[#f2f2f2] p-4 text-black m-auto h-screen">
                {activeTab == 'AllCourses' ? <AllCourses /> : <AddCourses />}
            </div>
        </div>
    )
}

export default AdminDashboard