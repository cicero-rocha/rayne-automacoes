import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Services />
      <Calculator />
      <Quote />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
