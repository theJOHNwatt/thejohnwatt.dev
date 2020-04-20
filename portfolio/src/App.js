import React from 'react';
import { Route } from 'react-router-dom'

import Home from './components/home'
import About from './components/about'
import Tech from './components/tech'
import Projects from './components/projects'
import Contact from './components/contact'

import './App.scss';

function App() {
  return (
    <div className="App">


      <Route path='/' render={_ => <Home/>} />
      <Route path='/' render={_ => <About/>} />
      <Route path='/' render={_ => <Tech/>} />
      <Route path='/' render={_ => <Projects/>} />
      <Route path='/' render={_ => <Contact/>} />
    </div>
  );
}

export default App;
