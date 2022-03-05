import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
