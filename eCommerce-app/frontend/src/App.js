// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Switch }

import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={ <HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
