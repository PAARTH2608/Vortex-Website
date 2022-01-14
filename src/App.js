import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Domains from './components/pages/Domains';
import Speakers from './components/pages/Speakers';
import Timeline from './components/pages/Timeline';
import Prizes from './components/pages/Prizes';
import FAQ from './components/pages/FAQ';
import Sponsors from './components/pages/Sponsors';
import Footer from './components/pages/Footer';

function App() {
  // const location = useLocation();
  return (
    <Router>
      <Navbar />
      {/* <Routes location={location} key={location.pathname}>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/domain'component={Domains} />
        <Route path='/speakers' component={Speakers} />
        <Route path='/timeline' component={Timeline} />
        <Route path='/prizes' component={Prizes} />
        <Route path='/faqs' component={FAQ} />
        <Route path='/sponsors' component={Sponsors} />
      </Routes> */}
      <Home />
      <About />
      <Domains />
      <Speakers />
      <Timeline />
      <Prizes />
      <FAQ />
      <Sponsors />
      <Footer />
    </Router>
  );
}

export default App;
