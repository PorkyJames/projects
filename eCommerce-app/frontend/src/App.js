// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store
// import { Switch }

import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={ <HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
