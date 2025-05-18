import React from "react";

// Stuff for navigation
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Stylesheets
import './index.css'

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/blog/:slug" element={<BlogPost/>} />
        </Routes>
      </Router>

      <Footer/>
    </div>
  )
}

export default App
