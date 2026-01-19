import { Route, Routes } from "react-router-dom";
import Header from "./Pages/header";
import Main from "./Pages/main";
import Footer from "./Pages/footer";
import NewCourses from "./Pages/newcourses";
import CoursesDetails from "./Pages/courseDetails";
import ScrollToTop from "./utlis/ScrollToTop";
import AdminDashboard from "./admin/AdminDashboard";
import Page404 from "./Pages/404";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <ScrollToTop />
      <Header showModal={showModal} setShowModal={setShowModal} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/courses" element={<NewCourses />} />
        <Route path="/new-courses/:title" element={<CoursesDetails showModal={showModal} setShowModal={setShowModal} />} />
        <Route path="/admin/dashboard/" element={<AdminDashboard />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
      {AOS.init()}
    </div>
  )
}

export default App