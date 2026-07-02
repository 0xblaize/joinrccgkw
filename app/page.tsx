import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Community from "./components/Community";
import Sermons from "./components/Sermons";
import Give from "./components/Give";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative w-full bg-black">
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Community />
        <Sermons />
        <Give />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
