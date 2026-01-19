import React from "react";

function Footer() {
  return (
    <div className="bg-black h-auto md:h-83 py-8 md:py-0">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 p-4 md:p-2 w-full md:w-[80%] m-auto">
        
        <div className="w-full md:w-85 h-auto md:h-50 py-4">
          <img
            src="https://framerusercontent.com/images/fN6aMU0HlaC3eeMooBhJqEg4pkA.png?scale-down-to=512&width=897&height=897"
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <p className="py-2 text-sm mt-4 leading-6">
            Mass Study  India s Most Trusted English Learning Channel Join 5
            million+ learners on YouTube mastering Spoken English and Grammar
            with Mass Study! Whether you're a beginner or looking to improve
            fluency, our expert-led courses on the Mass Study App guarantee real
            success.
          </p>
        </div>

        <div className="w-full md:w-85 h-auto md:h-50 py-4">
          <p className="text-xl md:text-2xl font-bold mt-2 md:mt-10">
            Download app
          </p>
        </div>

        <div className="w-full md:w-85 h-auto md:h-50 py-4">
          <p className="text-xl font-bold py-3">Contact Us</p>
          <p className="text-sm font-bold py-3 wrap-break-word">
            massstudytechnical2025@gmail.com
          </p>
          <p className="text-xl font-bold py-3">+91 9311330265</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
