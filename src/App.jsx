import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import ContactForm from './components/ContactForm/contactForm.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/contact.jsx';
import Home from './pages/Home/Home.jsx';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail.jsx';
import Services from './pages/Services/Services.jsx';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";


function App() {
  return (
    <Router>
       <ScrollToTop />  
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;