import { useEffect, useRef, useState } from "react";

export default function UserProfile({ user }) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);
    console.log(user);

    useEffect(() => {
        const close = (e) => !wrapRef.current?.contains(e.target) && setOpen(false);
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    return (
        <div ref={wrapRef} className="relative inline-block  z-50">
            <button
                onClick={() => setOpen(!open)}
                className="rounded-full ring-2 ring-transparent hover:ring-gray-300 transition"
            >
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="User"
                />
            </button>

            <div
                className={`absolute right-0 mt-5 w-56 overflow-hidden rounded-2xl border border-gray-300  bg-white shadow-xl transition-all duration-200 ${open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                    }`}
            >
                <div className="px-4 py-3 border-b">
                    <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>

                <div className="p-2">
                    {["Purchess Courses"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block px-3 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100"
                        >
                            {item}
                        </a>
                    ))}

                    <button
                        onClick={() => {
                            localStorage.clear();
                            window.location.href = "/";
                        }}
                        className="w-full text-left px-3 py-2 mt-2 text-sm rounded-lg text-red-600 hover:bg-red-50"
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    );
}
