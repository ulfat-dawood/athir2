import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Vision from './components/Vision';
import Success from './components/Success';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <About/>
      <Vision/>
      <Success/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
