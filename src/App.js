import { useState, useEffect } from 'react';
import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => setYear(new Date().getFullYear()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <CountdownTimer date={`Sep 05 ${year}`} />
      <Footer />
    </div>
  );
}

export default App;
