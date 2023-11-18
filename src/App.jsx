import "./App.css";
import Footer from "./Footer/Footer";
import ShopBtn from "./Footer/ShopBtn";
import Hero from "./Hero/Hero";
import Navbar from "./NavBar/Navbar";
import Work from "./Work/Work";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="flex flex-col relative">
      <Navbar/>
      <Hero/>
      <Work/>
      <Contact/>
      <Footer/>
      <ShopBtn/>
    </div>
  );
}

export default App;
