import React from 'react';
import Fade from 'react-reveal/Fade';
import { Route } from 'react-router-dom'

import Tech from './components/tech'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Nav from './components/nav'

import './App.scss';

function App() {
  return (
    <div className="App">

      <Nav/>
      <Route path='/' component={_ => <Home/>} />
      <Route path='/' component={_ => <About/>} />
      <Route path='/' component={_ => <Tech />} />
      <Route path='/' component={_ => <Projects/>} />
      <Route path='/' component={_ => <Contact/>} />
    </div>
  );
}

export default App;
