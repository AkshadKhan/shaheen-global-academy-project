
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTotop";
// import PopupManager from "./features/PopupManager";
import { Header } from './components/Header';
import HomePage from "./pages/HomePage";
import AcademicsPage from "./pages/AcademicsPage";
import AboutPage from "./pages/AboutPage";
import { Footer } from "./components/Footer";
import QuickLinks from "./components/QuickLinks";
import Gallery from "./pages/Gallery";
import ContactUsPage from "./pages/ContactUsPage";
import CoursesPage from "./pages/CoursesPage";

// import AdminLogin from "../../adminLogin/src/pages/AdminLogin";



export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ScrollToTop /> {/* Scroll to top on route change - needed I don't know if this is the optimized way, so check and confirm it please */}
      {/* <PopupManager /> Manages and displays pop-up announcements */}
      <main className="pt-[40px] pr-[0px] pb-[0px] pl-[0px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUsPage />} />
          {/* <Route path="/login" element={<AdminLogin />} /> */}
          
        </Routes>
      </main>
      <Footer />
      <QuickLinks/>
    </div>
  );
}
