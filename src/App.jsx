import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedVideos from "./components/FeaturedVideos";
import About from "./components/About";
import Topics from "./components/Topics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <FeaturedVideos />
        <About />
        <Topics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
