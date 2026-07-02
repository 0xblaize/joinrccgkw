import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Community from "./_components/Community";
import Sermons from "./_components/Sermons";
import Give from "./_components/Give";
import MapSection from "./_components/MapSection";
import Footer from "./_components/Footer";

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
