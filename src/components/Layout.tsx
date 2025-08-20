import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main>
        <ScrollToTop />
        <Outlet /> {/* ici s’affichent les pages */}
      </main>
      <Footer />
    </div>
  );
}
