import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from './Home';
import Post from './post';
import Author from './author/author.js';
import Footer from './footer';
import Categories from './Categories';
import Search from './search';

function App() {
  return (
    <div className="w-100">
    <NavBar/>
      <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/post" component={Post} />
      <Route path="/author" component={Author} />
      <Route path="/categorie" component={Categories} />
      <Route path="/search" component={Search} />
      </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
