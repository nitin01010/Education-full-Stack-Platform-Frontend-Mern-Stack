import { Link } from "react-router-dom";
import Account from "./account";
import { useState } from "react";

function Header() {
    const [showModal,setShowModal] = useState(false);
    return (
        <div className=" relative flex justify-around items-center bg-white text-black h-20 shadow">
            <span className=" flex gap-2  items-center">
                <img src="https://framerusercontent.com/images/fN6aMU0HlaC3eeMooBhJqEg4pkA.png?scale-down-to=512&width=897&height=897" className=" h-8 w-8" />
                <Link to="/">
                    <p className=" text-xl font-bold capitalize">Mass Study</p>
                </Link>
            </span>
            <nav className=" flex gap-10 items-center text-md ">
                <Link to="/" className=" underline">Home</Link>
                <Link to="courses">Course</Link>
                <p
                    onClick={() => {
                        document.getElementById("explore")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >Explore</p>
                <p
                    onClick={() => {
                        document.getElementById("about")?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}

                >About</p>
                <button
                onClick={()=> setShowModal(!showModal)}
                className=" bg-red-500 text-white shadow-xl rounded-md w-22 h-11.5 ml-2">Login</button>
               {showModal && <Account onClose={() => setShowModal(false)} />}
            </nav>
        </div>
    )
}

export default Header;