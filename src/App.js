import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="landingPage">
    <Navbar />
    <Banner />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
