import React from 'react';

import './App.css';
import Product from './components/products';
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './components/home'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path ="/home" component = {Home} />
        <Route exact path ="/" component ={Product} />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
