import Event from "./components/Event";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import Package from "./components/Package";
import AboutUs from "./components/AboutUs";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Event />
      <Video />
      <Package />
      <AboutUs />
      <Footer />
    </>
  );
}
