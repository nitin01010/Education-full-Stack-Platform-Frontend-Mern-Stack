import { useState } from "react";
import { useParams } from "react-router-dom"

function CoursesDetails() {
    const [activeTab, setActiveTab] = useState("overview");
    const { title } = useParams();
    const tabClass = (tab) =>
        `cursor-pointer w-36 py-2 ${activeTab === tab ? "border-b-4 border-red-500 font-semibold" : ""
        }`;

    return (
        <div>
            <div className=" flex justify-center items-center bg-red-800 h-42">
                <div className="p-1 w-[74%] py-4">
                    <p className=" text-white text-3xl capitalize font-bold"> <strong>{title}</strong> </p>
                </div>
            </div>
            <div className="bg-white p-2">
                <div className=" flex justify-between py-1 w-[74%] m-auto">
                    <div className="text-black mr-2 " >
                        <div className="flex border-b border-gray-300 justify-between text-black">
                            <button onClick={() => setActiveTab("overview")} className={tabClass("overview")}>
                                Overview
                            </button>

                            <button onClick={() => setActiveTab("live")} className={tabClass("live")}>
                                Live
                            </button>

                            <button onClick={() => setActiveTab("content")} className={tabClass("content")}>
                                Content
                            </button>

                            <button onClick={() => setActiveTab("demo")} className={tabClass("demo")}>
                                Demo Videos
                            </button>

                            <button onClick={() => setActiveTab("test")} className={tabClass("test")}>
                                Test
                            </button>
                        </div>
                        <div className=" py-4 ">
                            <p className=" text-2xl">{activeTab}</p>
                            <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde natus tempore consequatur, ut sit voluptates. Quod iusto voluptates optio cum ab fuga doloremque, cupiditate aspernatur. Dicta inventore magnam assumenda facilis voluptatem. Voluptatibus totam aut, cupiditate sit hic id architecto illum nesciunt molestiae? Vitae nisi repellendus optio distinctio similique quasi sit consequuntur nesciunt sequi molestiae veniam mollitia at expedita assumenda aliquam fugiat, recusandae obcaecati. Obcaecati quaerat, neque corporis animi placeat odio fugit, distinctio laudantium velit assumenda non adipisci eaque? Sint nesciunt officia vitae a distinctio illo aliquam eius tenetur quas id! Perferendis eum sunt, quos at dolore mollitia dolorum nemo.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi voluptatem, non veritatis ut cumque dignissimos quibusdam, sunt fugiat consequuntur perspiciatis sequi fuga, voluptates tempore sint voluptas ea! Qui sunt itaque esse ducimus error adipisci eveniet obcaecati, facilis, numquam, repellendus unde tempora nemo accusamus vitae sed saepe. Asperiores id cumque at aut nulla voluptatum dolor modi omnis, explicabo nostrum magnam similique cupiditate necessitatibus sint velit laborum totam. Provident, maxime officia, dolores cum voluptatum omnis reiciendis earum voluptates quam odio vel, fugit ipsam consequuntur quia placeat laborum sunt deserunt dolor assumenda mollitia. Deserunt aspernatur voluptate veritatis voluptates, officia minus excepturi beatae!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quisquam libero quos amet suscipit, eos corrupti fuga nostrum perspiciatis eius animi. Quos illo aliquam blanditiis veritatis, error ea velit est tempora ut voluptates itaque tenetur asperiores quas repudiandae quasi rerum suscipit? Laborum ipsam expedita iure aut officia in animi? Quo commodi eum quibusdam perferendis, veritatis assumenda esse, recusandae non cupiditate ullam corporis dolorum, saepe libero officiis a nulla consequatur. Ipsa, tenetur nihil. Eum quae, molestias reprehenderit nihil amet itaque pariatur ipsam a consequuntur, error fugit id eos inventore, iste quis. Corporis laudantium nemo incidunt dolor voluptas, nobis ad obcaecati accusamus.
                        </div>
                    </div>
                    <div className=" h-95 w-81.25 min-w-81.25  bg-white -mt-30 rounded-xl p-1 border-gray-100">
                        <img src="https://appx-content-v2.classx.co.in/paid_course3/2025-09-26cf9a205a-7c7c-40ec-a56e-297a92edfd65.jpg" className="  w-full rounded-t-xl" />
                        <div className=" p-2 bg-gray-100 rounded-b-xl">
                            <p className=" text-gray-400 font-light text-sm">Price</p>
                            <div className=" flex justify-between py-1 ">
                                <div className=" flex gap-4 ">
                                    <p className=" font-bold text-xl text-gray-400 line-through">₹5,000</p>
                                    <p className=" font-bold text-xl text-red-700">₹2,499</p>
                                </div>
                                <span className=" rounded-full text-center text-sm text-green-600 bg-green-300 h-7 w-17">51% off</span>
                            </div>
                            <button className=" cursor-pointer bg-red-600 h-10 rounded-xl mt-3 shadow w-full">Buy Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesDetails