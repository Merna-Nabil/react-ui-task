import "./App.scss";
import About from "./components/aboutUs/About";
import Brands from "./components/brands/Brands";
import Business from "./components/business/Business";
import Footer from "./components/footer/Footer";
import Overview from "./components/overview/Overview";
import Platform from "./components/platform/Platform";
import Process from "./components/process/Process";
import Technology from "./components/technology/Technology";
import Testmonials from "./components/testmonials/Testmonials";

function App() {
  return (
    <div className="App">
      <About />
      <Brands />
      <Business />
      <Platform />
      <Overview />
      <Technology />
      <Process />
      <Testmonials />
      <Footer/>
    </div>
  );
}

export default App;
