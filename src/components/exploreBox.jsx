

function ExploreBox({ img, title }) {
    return (
        <div className=" flex items-center gap-4 cursor-pointer shadow-md border border-gray-300 m-auto  rounded-xl w-[320px] h-30 p-8">
            <img src={img} className=" w-15 h-15" alt="Icons" />
            <p className=" text-black font-bold text-lg  ">{title}</p>
        </div>
    )
}

export default ExploreBox