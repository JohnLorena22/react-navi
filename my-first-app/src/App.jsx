import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home';

function App() {
  return(
    <div>
    <Home/>
    </div>
  );
  }

export default App
