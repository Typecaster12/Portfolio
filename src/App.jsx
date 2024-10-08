import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/LandingPage/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Reviews from "./Components/Reviews/Reviews";
import Service from "./Components/Service/Service";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Service />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default App
