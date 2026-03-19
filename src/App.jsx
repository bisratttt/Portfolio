import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import SideQuests from './components/SideQuests';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Experience />
        <SideQuests />
        <Education />
        <Hobbies />
        <Contact />
      </main>
    </>
  );
}

export default App;
