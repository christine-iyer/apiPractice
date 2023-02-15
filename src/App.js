import { useState, useEffect } from 'react'
import './App.css';
import Investing from './pages/Investing/Investing';
import News from './pages/News/News';
import Header from './components/ui/Header';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      
     <Investing />
     <News />
      </header>
    </div>
  );
}

export default App;
