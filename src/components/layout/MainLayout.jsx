import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "../common/ScrollProgress";
import BackToTop from "../common/BackToTop";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <ScrollProgress />

      <main>{children}</main>

      <Footer />
       <BackToTop />
    </>
  );
}