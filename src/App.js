//import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, About, Contact, Tech, Projects, Footer }from './components';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar />
        <About />
        <Contact />
        <Tech />
        <Projects />
        <Footer />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
