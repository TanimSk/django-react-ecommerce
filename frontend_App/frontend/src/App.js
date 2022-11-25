// import logo from './logo.svg';
// import './App.css';
import '@picocss/pico';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hi' element={<div>13</div>} />
        </Routes>
      </BrowserRouter >
      
    </div>
  );
}

export default App;
