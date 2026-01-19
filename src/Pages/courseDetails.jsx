import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function CoursesDetails({ showModal, setShowModal }) {
  const [activeTab, setActiveTab] = useState("overview");
  const { title } = useParams();

  const tabClass = (tab) =>
    `cursor-pointer min-w-[120px] md:w-36 py-2 ${
      activeTab === tab ? "border-b-4 border-red-500 font-semibold" : ""
    }`;

  const openPayment = async ({ amount, title }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    const res = await fetch("http://localhost:3000/api/v1/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount, title }),
    });

    if (res.status === 401) {
      localStorage.clear();
      toast.error("Session expired. Please login again.");
      window.location.href = "/";
      return;
    }

    const data = await res.json();

    if (!data.success) {
      toast.error(data.message);
      return;
    }

    const options = {
      key: data.key,
      amount: data.order.amount,
      currency: data.order.currency,
      name: "My App",
      description: title,
      order_id: data.order.id,

      handler: function (response) {
        console.log("Payment Success:", response);
        toast.success("Payment Successful!");
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleBuy = (value) => {
    if (value === null) {
      setShowModal(true);
      return;
    }

    toast.success("Opening payment...");

    openPayment({
      amount: 1,
      title: value.title || "NodeJS Course",
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-red-800 h-42">
        <div className="p-1 w-full md:w-[74%] py-4 px-4 md:px-0">
          <p className="text-white text-2xl md:text-3xl capitalize font-bold">
            <strong>{title}</strong>
          </p>
        </div>
      </div>

      <div className="bg-white p-2">
        <div className="flex flex-col md:flex-row justify-between gap-6 py-1 w-full md:w-[74%] m-auto px-4 md:px-0">
          
          {/* RIGHT CARD (TOP on mobile) */}
          <div className="w-full md:w-[32%] order-1 md:order-2">
            <div className="h-auto md:h-95 w-full md:w-81.25 bg-white md:-mt-30 rounded-xl p-1 border-gray-100 md:sticky md:top-6">
              <img
                src="https://appx-content-v2.classx.co.in/paid_course3/2025-09-26cf9a205a-7c7c-40ec-a56e-297a92edfd65.jpg"
                className="w-full rounded-t-xl object-cover"
              />

              <div className="p-3 md:p-2 bg-gray-100 rounded-b-xl">
                <p className="text-gray-400 font-light text-sm">Price</p>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 gap-2">
                  <div className="flex gap-4">
                    <p className="font-bold text-xl text-gray-400 line-through">
                      ₹5,000
                    </p>
                    <p className="font-bold text-xl text-red-700">₹2,499</p>
                  </div>

                  <span className="rounded-full text-center text-sm text-green-600 bg-green-300 h-7 w-17">
                    51% off
                  </span>
                </div>

                <button
                  onClick={() => handleBuy(localStorage.getItem("token"))}
                  className="cursor-pointer bg-red-600 h-10 rounded-xl mt-3 shadow w-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* LEFT CONTENT (AFTER card on mobile) */}
          <div className="text-black w-full md:w-[68%] order-2 md:order-1">
            <div className="flex border-b border-gray-300 justify-start md:justify-between text-black overflow-x-auto whitespace-nowrap">
              <button
                onClick={() => setActiveTab("overview")}
                className={tabClass("overview")}
              >
                Overview
              </button>

              <button
                onClick={() => setActiveTab("live")}
                className={tabClass("live")}
              >
                Live
              </button>

              <button
                onClick={() => setActiveTab("content")}
                className={tabClass("content")}
              >
                Content
              </button>

              <button
                onClick={() => setActiveTab("demo")}
                className={tabClass("demo")}
              >
                Demo Videos
              </button>

              <button
                onClick={() => setActiveTab("test")}
                className={tabClass("test")}
              >
                Test
              </button>
            </div>

            <div className="py-4">
              <p className="text-xl md:text-2xl capitalize">{activeTab}</p>
              <br />
              <p className="text-sm md:text-base leading-7">
                Lorem ipsum content...
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CoursesDetails;
