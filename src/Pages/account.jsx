import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Account({ onClose, setUser }) {
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
    city: "",
    newPassword: "",
  });

  const [step, setStep] = useState("EMAIL"); // EMAIL -> LOGIN -> REGISTER
  const [loading, setLoading] = useState(false);

  const API_BASE = "http://localhost:3000/api/v1/auth";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // ✅ Step 1: Check email in DB
  const handleNext = async () => {
    try {
      if (!input.email) {
        toast.error("Email is required");
        return;
      }

      setLoading(true);

      const { data } = await axios.post(`${API_BASE}/check-email`, {
        email: input.email,
      });

      if (data.exists === true) {
        setStep("LOGIN");
        toast.success("User found. Please enter password.");
      } else {
        setStep("REGISTER");
        toast.info("New user. Please fill details to register.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 2A: Login
  const handleLogin = async () => {
    try {
      if (!input.password) {
        toast.error("Password is required");
        return;
      }

      setLoading(true);

      const { data } = await axios.post(`${API_BASE}/login`, {
        email: input.email,
        password: input.password,
      });

      toast.success("Login successful");
      setUser(data);

      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 2B: Register
  const handleRegister = async () => {
    try {
      if (!input.name || !input.city || !input.newPassword) {
        toast.error("Name, City and Password are required");
        return;
      }

      setLoading(true);

      const { data } = await axios.post(`${API_BASE}/register`, {
        name: input.name,
        email: input.email,
        city: input.city,
        password: input.newPassword,
      });

      toast.success("Registered successfully. Now login.");
      setUser(data);

      setStep("LOGIN");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-[30%] min-w-87.5 h-full p-6 shadow-xl">
        <img
          src="https://nocache-appxdb-v2.classx.co.in/subject/2025-10-08-0.8309333130194843.webp"
          className="w-16 h-16 mt-8 mx-auto rounded-full"
          alt="profile"
        />

        <h2 className="text-center py-2 text-lg font-bold">Welcome</h2>

        <p className="text-center text-xs py-2 text-gray-600">
          Please enter your email to Register or Login.
        </p>

        <div className="mt-8">
          {/* EMAIL INPUT ALWAYS SHOW */}
          <p className="text-sm py-2">Email</p>
          <input
            name="email"
            value={input.email}
            onChange={handleChange}
            type="text"
            placeholder="Enter your email"
            className="h-10 w-full outline-none bg-gray-200 shadow px-3 rounded-md mb-4"
          />

          {/* STEP: LOGIN */}
          {step === "LOGIN" && (
            <>
              <p className="text-sm py-2">Password</p>
              <input
                name="password"
                value={input.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter your password"
                className="h-10 w-full outline-none bg-gray-200 shadow px-3 rounded-md mb-4"
              />

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-green-600 text-white h-10 rounded-xl"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </>
          )}

          {/* STEP: REGISTER */}
          {step === "REGISTER" && (
            <>
              <p className="text-sm py-2">Name</p>
              <input
                name="name"
                value={input.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                className="h-10 w-full outline-none bg-gray-200 shadow px-3 rounded-md mb-4"
              />

              <p className="text-sm py-2">City</p>
              <input
                name="city"
                value={input.city}
                onChange={handleChange}
                type="text"
                placeholder="Enter your city"
                className="h-10 w-full outline-none bg-gray-200 shadow px-3 rounded-md mb-4"
              />

              <p className="text-sm py-2">New Password</p>
              <input
                name="newPassword"
                value={input.newPassword}
                onChange={handleChange}
                type="password"
                placeholder="Create password"
                className="h-10 w-full outline-none bg-gray-200 shadow px-3 rounded-md mb-4"
              />

              <button
                onClick={handleRegister}
                disabled={loading}
                className="w-full bg-blue-600 text-white h-10 rounded-xl"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </>
          )}

          {/* STEP: EMAIL -> NEXT BUTTON */}
          {step === "EMAIL" && (
            <button
              onClick={handleNext}
              disabled={loading}
              className="w-full bg-red-500 text-white h-10 rounded-xl"
            >
              {loading ? "Checking..." : "Next"}
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full border border-red-200 text-red-500 bg-red-100 mt-2 h-10 rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;