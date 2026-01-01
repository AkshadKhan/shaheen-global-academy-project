
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTotop";
import { Header } from './components/Header';
import HomePage from "./pages/HomePage";
import AcademicsPage from "./pages/AcademicsPage";
import { Footer } from "./components/Footer";
// import AdminLogin from "../../adminLogin/src/pages/AdminLogin";



export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ScrollToTop /> {/* Scroll to top on route change - needed I don't know if this is the optimized way, so check and confirm it please */}
      <main className="pt-[40px] pr-[0px] pb-[0px] pl-[0px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          {/* <Route path="/login" element={<AdminLogin />} /> */}
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}