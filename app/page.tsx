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
    <div className="relative w-full">
      <Nav />
      <main className="relative">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Community />
        <SectionDivider />
        <Sermons />
        <SectionDivider />
        <Give />
        <SectionDivider />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="h-px hairline" />
    </div>
  );
}
