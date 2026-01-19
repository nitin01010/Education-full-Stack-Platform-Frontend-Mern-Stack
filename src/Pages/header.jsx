import { Link } from "react-router-dom";
import Account from "./account";
import { useEffect, useState } from "react";
import UserProfile from "./profile";

function Header({ showModal, setShowModal }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken) setToken(savedToken);
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (data) => {
    setToken(data.token);
    setUser(data.user);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    setShowModal(false);
  };

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className="relative flex justify-between md:justify-around items-center bg-white text-black h-20 shadow px-4 md:px-0">
      <span className="flex gap-2 items-center">
        <img
          src="https://framerusercontent.com/images/fN6aMU0HlaC3eeMooBhJqEg4pkA.png?scale-down-to=512&width=897&height=897"
          className="h-8 w-8"
        />
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <p className="text-xl font-bold capitalize">Mass Study</p>
        </Link>
      </span>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10 items-center text-md">
        <Link to="/" className="underline">
          Home
        </Link>
        <Link to="courses">Course</Link>

        <p onClick={() => handleScrollTo("explore")}>Explore</p>

        <p onClick={() => handleScrollTo("about")}>About</p>

        {token ? (
          <UserProfile user={user} />
        ) : (
          <>
            <button
              onClick={() => setShowModal(!showModal)}
              className="bg-red-500 text-white shadow-xl rounded-md w-22 h-11.5 ml-2"
            >
              Login
            </button>

            {showModal && (
              <Account setUser={handleLogin} onClose={() => setShowModal(false)} />
            )}
          </>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-start gap-4 p-5 md:hidden z-50">
          <Link to="/" className="underline" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="courses" onClick={() => setMenuOpen(false)}>
            Course
          </Link>

          <p onClick={() => handleScrollTo("explore")}>Explore</p>

          <p onClick={() => handleScrollTo("about")}>About</p>

          {token ? (
            <UserProfile user={user} />
          ) : (
            <>
              <button
                onClick={() => {
                  setShowModal(!showModal);
                  setMenuOpen(false);
                }}
                className="bg-red-500 text-white shadow-xl rounded-md w-full sm:w-22 h-11.5"
              >
                Login
              </button>

              {showModal && (
                <Account setUser={handleLogin} onClose={() => setShowModal(false)} />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;