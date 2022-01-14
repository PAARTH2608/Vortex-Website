import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/domain' exact component={Domains} />
        <Route path='/speakers' exact component={Speakers} />
        <Route path='/timeline' exact component={Timeline} />
        <Route path='/prizes' exact component={Prizes} />
        <Route path='/faqs' exact component={FAQ} />
        <Route path='/sponsors' exact component={Sponsors} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
