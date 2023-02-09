import Navbar from './components/Navbar';
import './index.css';
import { Route, Routes } from "react-router-dom"
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Apply from './components/Apply';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Chapters from './components/Chapters';

function App() {
  return (
    <div>
      <div>
        <Navbar />
<<<<<<< HEAD
      </header>

=======
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
>>>>>>> 86cdf213222204a4326b0f2d5080678fe8ca2811
    </div>
  );
}

export default App;
