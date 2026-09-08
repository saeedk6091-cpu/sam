import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import WhyUs from './pages/WhyUs';
import About from './pages/About';
import Track from './pages/Track';
import Quote from './pages/Quote';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Portal from './pages/Portal';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-light">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/track" element={<Track />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portal" element={<Portal />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
