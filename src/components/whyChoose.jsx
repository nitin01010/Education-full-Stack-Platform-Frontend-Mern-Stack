
function Box({ img, title, description }) {
    return (
        <div data-aos="fade-down" className=" w-100 h-65 p-8 bg-gray-100 rounded-xl">
            <img src={img} className="w-14 h-14 rounded-md bg-red-500" />
            <p className=" text-red-500 font-bold text-2xl py-4 ">{title}</p>
            <p className=" text-black font-semibold">{description}</p>
        </div>
    )
}

export default Box