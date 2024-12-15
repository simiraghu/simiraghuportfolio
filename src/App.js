import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Project from './components/Project';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import EducationPage from './components/Education';
import SkillsPage from './components/Skills';
import Home from './components/Home';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/skill' element={<Skills />} />
        <Route path='/education' element={<EducationPage />} />
        <Route path='/skills' element={<SkillsPage />} />
      </Routes>

    </div>
  );
}

export default App;
