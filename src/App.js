import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
