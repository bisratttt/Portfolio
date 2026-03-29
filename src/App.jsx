import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import SideQuests from './components/SideQuests';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function Home() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
