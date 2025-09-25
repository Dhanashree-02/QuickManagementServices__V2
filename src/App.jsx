import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/contact';
import Home from './pages/Home/Home';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Services from './pages/Services/Services';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


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