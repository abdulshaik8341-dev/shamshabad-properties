import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Ventures from '@/pages/Ventures';
import VentureDetail from '@/pages/VentureDetail';
import Blog from '@/pages/Blog';
import BlogDetail from '@/pages/BlogDetail';
import Contact from '@/pages/Contact';
import FloatingActions from '@/components/FloatingActions';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ventures" element={<Ventures />} />
            <Route path="/ventures/:slug" element={<VentureDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <FloatingActions />
    </BrowserRouter>
  );
}
