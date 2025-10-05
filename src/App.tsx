import { BrowserRouter, Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Toolbox from './pages/Toolbox';
import CaseStudies from './pages/CaseStudies';
import DeepDive from './pages/DeepDive';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Import Layout
import Header from './components/layout/Header';
import Preloader from './components/ui/Preloader';
import Footer from './components/layout/Footer';

function useGA(){
  const { pathname, search } = useLocation();
  useEffect(() => {
    // @ts-ignore
    if (window.gtag) window.gtag('config', 'G-XXXX', { page_path: pathname + search });
  }, [pathname, search]);
}

const AppLayout = () => {
  useGA();
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/toolbox" element={<Toolbox />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/deep/:slug" element={<DeepDive />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/cv" element={<Navigate to="/resume" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
