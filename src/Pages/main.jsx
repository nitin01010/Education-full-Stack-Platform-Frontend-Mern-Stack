import { Link } from "react-router-dom";
import Box from "../components/whyChoose";
import MainCard from "../components/mainCard";
import ExploreBox from "../components/exploreBox";
import TestimonialsBox from "../components/testimonialsBox";

function Main() {
  return (
    <div>
      {/* HERO */}
      <section className="flex flex-col md:flex-row h-auto md:h-145 gap-10 md:gap-2 items-center justify-center bg-red-500 p-6 md:p-22">
        <div className="flex flex-col gap-6 md:gap-8 w-full md:w-[50%] text-center md:text-left">
          <p className="text-3xl md:text-5xl font-bold m-auto md:m-0">
            Speak English with <br /> Power, Presence & <br /> Purpose
          </p>

          <p className="text-[16px] md:text-[21.5px] m-auto md:m-0 font-semibold">
            Stop translating in your head. Stop fearing <br className="hidden md:block" />
            judgment. At Mass Study, we help you <br className="hidden md:block" />
            think, feel and express in English naturally
          </p>

          <Link to="/courses">
            <button className="w-52 h-12.5 bg-black md:ml-30 cursor-pointer transition-all ease-linear rounded-md shadow-2xl">
              Start Learning now
            </button>
          </Link>
        </div>

        <div className="w-full md:w-[50%] relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1631203928493-a4e4eb2b8da1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover rounded-xl shadow-2xl m-auto w-full max-w-md md:max-w-none md:w-114 h-96 md:h-134"
            alt="Teacher Images"
          />

          <div className="w-32 md:w-39 h-12 md:h-15 bg-black absolute top-7 rounded-md shadow right-6 md:right-16 -rotate-6">
            <div className="w-2 h-2 p-2 rounded-full absolute right-5 top-4 md:top-5 bg-white" />
          </div>

          <div className="w-24 md:w-29 h-12 md:h-15 bg-black absolute top-4 rounded-md shadow left-6 md:left-16 rotate-30">
            <div className="w-2 h-2 p-2 rounded-full absolute left-5 top-4 md:top-5 bg-white" />
          </div>
        </div>
      </section>

      {/* WHATSAPP BAR */}
      <section className="h-auto md:h-24 text-center p-5 md:p-7 bg-black">
        <p className="text-lg md:text-3xl font-bold">
          For any enquiries please WhatsApp at{" "}
          <span className="text-red-500">+91 9311330265</span>
        </p>
      </section>

      {/* TRUST SECTION */}
      <section className="p-5 md:p-7 bg-white">
        <p className="text-2xl md:text-3xl font-bold text-black text-center py-4">
          Trusted by Thousands. Proven by Results
        </p>

        <div
          data-aos="zoom-in"
          className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0 h-auto md:h-50 shadow-2xl rounded-t-2xl border border-gray-300 w-full md:w-[75%] m-auto mt-8 p-6"
        >
          <div className="w-full md:w-70 h-auto md:h-45">
            <img
              src="https://framerusercontent.com/images/g1hWhiCDUQ3JfHGj6xfVtflgM.png?width=320&height=320"
              className="m-auto md:ml-22.5 w-17 h-17"
            />
            <div className="flex gap-5 items-center justify-center mt-4">
              <div className="text-black p-2">
                <p className="text-xl font-bold">Views</p>
                <p className="font-bold mt-2 text-lg text-red-500">500M+</p>
              </div>
              <div className="w-0.5 h-20 bg-black hidden md:block" />
              <div className="text-black p-2">
                <p className="text-xl font-bold">Subscribes</p>
                <p className="font-bold mt-2 text-lg text-red-500">5.6M+</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-55 h-auto md:h-33 text-center">
            <img
              src="https://framerusercontent.com/images/fN6aMU0HlaC3eeMooBhJqEg4pkA.png?scale-down-to=512&width=897&height=897"
              className="w-22 h-22 m-auto"
              alt="Logo"
            />
            <p className="text-center text-red-500 capitalize text-lg font-bold p-2">
              Course sell Platform
            </p>
          </div>

          <div className="w-full md:w-80 h-auto md:h-45">
            <p className="text-center md:text-left md:ml-14 py-3 font-bold text-2xl h-17 text-black">
              TRUST WE BUILT
            </p>
            <div className="flex gap-5 items-center justify-center -mt-2">
              <div className="text-black p-2">
                <p className="text-xl font-bold">Students</p>
                <p className="font-bold mt-2 text-lg text-red-500">800,000+</p>
              </div>
              <div className="w-0.5 h-20 bg-black hidden md:block" />
              <div className="text-black p-2">
                <p className="text-xl font-bold">Average Rating</p>
                <p className="font-bold mt-2 text-lg text-red-500">4.8+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white p-6 md:p-10">
        <p className="text-3xl md:text-4xl text-black font-bold text-center py-1">
          Why Students Choose Mass Study
        </p>
        <p className="text-gray-600 py-5 text-center text-md">
          Because we don’t just teach English — we train you to own your voice
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-2">
          <Box
            title={"Real Speaking Practice"}
            description={"Live, interactive sessions that make you speak not just liste"}
          />
          <Box
            title={"Personal Feedback"}
            description={"Every session includes feedback on pronunciation, tone, and sentence flow"}
          />
          <Box
            title={"Visible Growth"}
            description={"Our learners see measurable progress in just 4–6 weeks"}
          />
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-white p-6 md:p-10">
        <p className="text-2xl md:text-3xl text-black font-bold text-center py-1">
          Your Journey to Fluent English Starts Here
        </p>
        <p className="text-gray-600 py-5 text-center text-md">
          Choose the course that fits your goals from basics to confident fluency
        </p>

        <div className="flex flex-col md:flex-row justify-around items-center gap-6 p-2">
          <MainCard
            title="Premium Spoken English Course"
            img="https://framerusercontent.com/images/csEjzlr73f2TLMHSnShUkB3SHI.png?scale-down-to=512&width=1576&height=978"
            link="https://app.massstudy.in/new-courses/1-premium-spoken-english-course-live-course"
          />

          <MainCard
            title="Personal English Trainer"
            img="https://framerusercontent.com/images/mh1JbJZB9m8k4n0ZkmO3Tp0dCM.png?scale-down-to=512&width=1178&height=742"
            link="https://app.massstudy.in/new-courses/2-personal-english-trainer-live-course"
          />

          <MainCard
            title="Basic Spoken English Course"
            img="https://framerusercontent.com/images/8nPjfJqJfPANbIF2FbS5ufiCqo.png?scale-down-to=512&width=1186&height=748"
            link="https://app.massstudy.in/new-courses/3-basic-spoken-english-course-live-course"
          />
        </div>

        <div className="flex justify-center items-center mt-10">
          <Link to={`/courses`}>
            <button className="w-72 md:w-80 cursor-pointer h-13 bg-black p-4 rounded-md">
              View All Courses
            </button>
          </Link>
        </div>
      </section>

      {/* EXPLORE */}
      <section id="explore" className="bg-white p-6 md:p-10">
        <p className="text-3xl md:text-4xl text-black font-bold text-center py-5 -mt-4">
          Explore
        </p>

        <div className="mt-5 flex flex-col items-center gap-6">
          <div data-aos="fade-down" className="flex flex-col md:flex-row gap-4 mb-2">
            <ExploreBox
              title="Live Courses"
              img="https://framerusercontent.com/images/UF8adg1gtVl0GEe4RZcv4I84Lg.png?width=381&height=375"
              link="https://app.massstudy.in/new-courses?examId=2"
            />
            <ExploreBox
              title="Recorded Course"
              img="https://framerusercontent.com/images/7JvPzTD3KPr7MQH91hyZRubm83M.png?width=381&height=375"
              link=""
            />
            <ExploreBox
              title="Free Courses"
              img="https://framerusercontent.com/images/6JmmjotSZFIGZQqUFR1ZKOXxeic.png?width=381&height=375"
              link=""
            />
          </div>

          <div data-aos="fade-down" className="flex flex-col md:flex-row gap-4 mb-2">
            <ExploreBox
              title="Books"
              img="https://framerusercontent.com/images/6JmmjotSZFIGZQqUFR1ZKOXxeic.png?width=381&height=375"
              link=""
            />
            <ExploreBox
              title="Free Test Series"
              img="https://framerusercontent.com/images/8VKDsP8hpRXkOW6EJqI4HUDKvPg.png?width=381&height=375"
              link=""
            />
            <ExploreBox
              title="Paid Test Series"
              img="https://framerusercontent.com/images/1oep0lr6hZ84v0bMnV2hw6TMQtY.png?width=256&height=256"
              link=""
            />
          </div>

          <div data-aos="fade-down" className="flex flex-col md:flex-row gap-4 mb-2">
            <ExploreBox
              title="E-books"
              img="https://framerusercontent.com/images/8A3DgRDMrWqc2rsV98JTPbcVA7I.png?width=381&height=375"
              link=""
            />
            <ExploreBox
              title="Daily Dose"
              img="https://framerusercontent.com/images/X26zLhp3I0HSgTEtnd34qmJ6u8s.png?width=256&height=256"
              link=""
            />
            <ExploreBox
              title="PDF Notes"
              img="https://framerusercontent.com/images/NZzsn0kyfbiTCSFN3y8rkV6gbU0.png?width=381&height=375"
              link=""
            />
          </div>

          <div data-aos="fade-down" className="flex flex-col md:flex-row gap-4 mb-2">
            <ExploreBox
              title="Upcoming Events"
              img="https://framerusercontent.com/images/N4upczjwQhQpam1hcEvxKYCHk.png?width=381&height=375"
              link=""
            />
            <ExploreBox
              title="Audio Books"
              img="https://framerusercontent.com/images/FTtOZZpMJmLienuvwheO1StTkI.png?width=381&height=375"
              link=""
            />
            <ExploreBox
              title="Student Feedback"
              img="https://framerusercontent.com/images/qD0TQusXYQBW6xgLocl8FyV7W8A.png?width=381&height=375"
              link=""
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="flex flex-col md:flex-row justify-center gap-10 p-6 md:p-10 bg-white"
      >
        <div className="w-full md:w-[30%]">
          <img
            src="https://framerusercontent.com/images/hJpoHmkAnh78NtSWRqT2tF4Ps3g.jpg?scale-down-to=512&width=7008&height=4672"
            className="object-cover w-full max-w-md md:max-w-none md:w-113.75 h-96 md:h-135.75 m-auto rounded-2xl object-top-right"
          />
        </div>

        <div data-aos="fade-left" className="w-full md:w-[42%]">
          <p className="text-2xl md:text-3xl py-2 font-bold text-gray-400">
            Meet Your Trainer
          </p>
          <p className="text-2xl md:text-3xl font-bold text-black">
            Kamlesh Yadav Sir
          </p>

          <p className="py-4 text-md md:text-lg text-black">
            Hi, I’m Kamlesh Yadav, the founder, CEO & lead trainer at Mass Study.
            Over the past decade, I’ve coached thousands of students and
            professionals to break their hesitation and express clearly whether
            in interviews, classrooms, or global meetings.
          </p>

          <p className="py-4 text-md md:text-lg text-black">
            My teaching philosophy is simple: <br /> No fear. No memorising. Only
            practice that works
          </p>

          <p className="mt-4 text-black">
            <strong>Key Highlights:</strong>
          </p>

          <ol type="1">
            <li className="py-2 font-semibold text-black">
              1. 12+ years of experience in spoken English & personality <br className="hidden md:block" />
              development
            </li>
            <li className="py-2 font-semibold text-black">
              2. Structured learning roadmap for every level
            </li>
            <li className="text-black py-2 font-semibold">
              3. Real-life speaking simulations, feedback & progress <br className="hidden md:block" />
              tracking
            </li>
          </ol>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="bg-red-500 p-6 md:p-10">
        <p className="text-3xl md:text-4xl text-white font-bold text-center py-5 -mt-4">
          Featured Videos
        </p>
        <p className="text-white py-5 text-center text-md">
          Explore our most watched lessons and student journeys on YouTube
        </p>

        <div className="mt-5 flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row justify-around gap-4 w-full mb-2">
            <iframe
              className="w-full md:w-[40%] rounded-xl h-60 md:h-67"
              src="https://www.youtube.com/embed/syrkNbadu6U?si=--GCO9lWX32F6Lkq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full md:w-[40%] rounded-xl h-60 md:h-67"
              src="https://www.youtube.com/embed/syrkNbadu6U?si=--GCO9lWX32F6Lkq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full md:w-[40%] rounded-xl h-60 md:h-67"
              src="https://www.youtube.com/embed/tq--BJtJzPM?si=OCZmvW0EmiLTIu3X"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col md:flex-row justify-around gap-4 w-full mb-2">
            <iframe
              className="w-full md:w-[40%] rounded-xl h-60 md:h-67"
              src="https://www.youtube.com/embed/syrkNbadu6U?si=--GCO9lWX32F6Lkq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full md:w-[40%] rounded-xl h-60 md:h-67"
              src="https://www.youtube.com/embed/syrkNbadu6U?si=--GCO9lWX32F6Lkq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <iframe
              className="w-full md:w-[40%] rounded-xl h-60 md:h-67"
              src="https://www.youtube.com/embed/tq--BJtJzPM?si=OCZmvW0EmiLTIu3X"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="pt-10 md:pt-17.5 bg-black pr-4 md:pr-10 pb-20 md:pb-25 h-auto md:h-144">
        <p className="text-3xl md:text-4xl font-bold text-center">
          Student Success & Testimonials
        </p>
        <p className="py-6 md:py-10 text-center text-xl md:text-3xl">
          Real Students. Real Transformations
        </p>

        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full mb-2">
            <TestimonialsBox />
            <TestimonialsBox />
            <TestimonialsBox />
          </div>
        </div>
      </section>

      {/* JOIN FAMILY */}
      <section className="w-full pt-10 pb-10 bg-white">
        <p className="text-2xl md:text-3xl text-center font-bold text-black">
          Join our Family
        </p>

        <div className="flex flex-wrap gap-6 md:gap-14 justify-center items-center py-10 px-4">
          <img
            src="https://framerusercontent.com/images/D2q4QPFkD1fCyzuhAARjMSGkas.png?width=512&height=512"
            className="object-cover w-14 md:w-17.5 h-14 md:h-17.5 rounded-full bg-gray-400"
          />
          <img
            src="https://framerusercontent.com/images/59PGTBNfVNDYfzoBKLCG5Cm4YqE.png?width=512&height=512"
            className="object-cover w-14 md:w-17.5 h-14 md:h-17.5 rounded-full bg-gray-400"
          />
          <img
            src="https://framerusercontent.com/images/cXlcttjkQJaCrkFpdIp2RmzNUk.png?scale-down-to=512&width=768&height=768"
            className="object-cover w-14 md:w-17.5 h-14 md:h-17.5 rounded-full bg-gray-400"
          />
          <img
            src="https://framerusercontent.com/images/atlOLIls4CQU3KOKKJIzxrqdQTU.png?width=512&height=512"
            className="object-cover w-14 md:w-17.5 h-14 md:h-17.5 rounded-full bg-gray-400"
          />
          <img
            src="https://framerusercontent.com/images/HuaZMLNk3UyWHQpNMJuVdvl04A.png?width=128&height=128"
            className="object-cover w-14 md:w-17.5 h-14 md:h-17.5 rounded-full bg-gray-400"
          />
          <img
            src="https://framerusercontent.com/images/13HVRbRMIvaT2O959gNx4NtLoQ.png?width=512&height=512"
            className="object-cover w-14 md:w-17.5 h-14 md:h-17.5 rounded-full bg-gray-400"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full pt-10 pb-20 md:pb-25 bg-red-600">
        <p className="text-3xl md:text-4xl py-2 text-center font-bold text-white">
          Your voice matters, Let's help
        </p>
        <p className="text-2xl md:text-3xl py-1 text-center font-bold text-white">
          you express it beautifully
        </p>
        <p className="text-xs py-4 text-center font-bold text-white">
          Join the community that believes in progress, not perfection
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10 font-bold px-4">
          <button className="w-full md:w-50 h-10 rounded-full shadow-md cursor-pointer bg-black">
            Start Learing Now
          </button>
          <button className="w-full md:w-50 h-10 rounded-full shadow-md cursor-pointer bg-green-400">
            Chat on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

export default Main;