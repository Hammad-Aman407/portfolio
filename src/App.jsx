import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./index.css";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,  
      mirror:true  
    });
    setLoading(false)
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App