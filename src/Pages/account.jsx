import { useEffect, useState } from "react";


function Account({ onClose }) {
  const [input,setInput] = useState({
    email:'',
    password:''
  });
  
  const HandleVerify = (e)=> {
    const {name,value} = e.target;
    setInput((values)=> ({...values,[name]:value}));
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = () => {
    console.log(input);
    setInput({email:'',password:''})
  }

  

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-[30%] min-w-87.5 h-full p-6 shadow-xl">
        <img
          src="https://nocache-appxdb-v2.classx.co.in/subject/2025-10-08-0.8309333130194843.webp"
          className="w-16 h-16 mt-8 mx-auto rounded-full"
          alt="profile"
        />

        <h2 className="text-center py-2 text-lg font-bold">
          Welcome 👋
        </h2>

        <p className="text-center text-xs py-2 text-gray-600">
          Please enter your details to Register or Login.
        </p>

        <div className="mt-8">
          <p className="text-sm py-2">Phone number / Email</p>

          <input
            name="email"
            value={input.email}
            onChange={(e)=> HandleVerify(e)}
            type="text"
            placeholder="Enter your email or phone number"
            className="h-10 w-full outline-none bg-gray-200 shadow px-3 rounded-md mb-4"
          />

            <input
          name="password"
          value={input.password}
          onChange={(e)=> HandleVerify(e)}
          type="password"
          placeholder="password"
          className="h-10 w-full outline-none bg-gray-200 shadow px-3 rounded-md mb-4"
        />

          


          <button onClick={handleSubmit} className="w-full bg-red-500 text-white h-10 rounded-xl">
            Next
          </button>

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
