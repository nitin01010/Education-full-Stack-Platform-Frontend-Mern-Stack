import { Link } from "react-router-dom";


function MainCard({ img, title, link }) {
    return (
        <div data-aos="fade-down" className=" w-[320px] h-82 rounded-xl  bg-white shadow-xl p-1">
            <img src={img} className="object-cover rounded-t-xl w-full h-51" />
            <div className=" p-4">
                <p className=" text-black text-md font-bold">{title}</p>
                <Link to={`/new-courses/${title}`}>
                    <button className=" cursor-pointer shadow-xl w-26 bg-red-500 rounded-md text-sm mt-5  h-10">Learn more</button>
                </Link>
            </div>
        </div>
    )
}

export default MainCard