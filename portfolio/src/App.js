import React from 'react';
import { Route } from 'react-router-dom'

import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Nav from './components/nav'

import './App.scss';

function App() {
  return (
    <div className="App">

      <Nav />
      <Route path='/' render={_ => <Home/>} />
      <Route path='/' render={_ => <About/>} />
      <Route path='/' render={_ => <Projects/>} />
      <Route path='/' render={_ => <Contact/>} />
    </div>
  );
}

export default App;
