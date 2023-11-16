import "./App.css";
import Hero from "./Hero/Hero";
import Navbar from "./NavBar/Navbar";
import Work from "./Work/Work";

function App() {
  return (
    <div className="flex flex-col relative">
      <Navbar/>
      <Hero/>
      <Work/>
    </div>
  );
}

export default App;
