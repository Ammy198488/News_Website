import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ArticleDetails from './components/Articledetails';
import VideoDetails from './components/Videodetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path="/article/:id" element={<ArticleDetails />} />
        <Route exact path="/video/:id" element={<VideoDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;