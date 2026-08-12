import { Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import ResumeHeader from './components/ResumeHeader';
import Experience from './components/Experience';
import SideQuests from './components/SideQuests';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function Resume() {
  return (
    <>
      <ThemeToggle />
      <main>
        <ResumeHeader />
        <Experience />
        <SideQuests />
        <Education />
        <Hobbies />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
