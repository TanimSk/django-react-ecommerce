// import logo from './logo.svg';
// import './App.css';
import '@picocss/pico';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter >

    </div>
  );
}

export default App;
