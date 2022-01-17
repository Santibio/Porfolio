import './App.css';
import { About } from './components/About/About';
import Contact from './components/Contact.js/Contact';
import Navegation from "./components/Navbar/Navegation";
import { Projects } from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='app'>
      <Navegation />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
