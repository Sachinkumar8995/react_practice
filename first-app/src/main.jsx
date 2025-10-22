import React, { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// const element1 = <h1>hamara second React project</h1>;

// createRoot(document.getElementById('root')).render(element1);

// const myElement = React.createElement('h1', null, 'I do not use JSX!',createElement('i', null, ' This is italic text',createElement('b', null, ' This is bold text')));

// createRoot(document.getElementById('root')).render(myElement);