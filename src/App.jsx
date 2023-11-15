import "./App.css";
import Hero from "./Hero/Hero";
import Navbar from "./NavBar/Navbar";

function App() {
  return (
    <div className="flex flex-col relative">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
