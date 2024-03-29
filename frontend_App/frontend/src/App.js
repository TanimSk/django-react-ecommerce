// import './App.css';
import '@picocss/pico';
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Header from './components/Header';

import Home from './pages/Home';
import ProductView from './pages/ProductView/ProductView';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EmailVerify from './pages/EmailVerify';

import PrivateRoute from './functions/PrivateRoute';
import Profile from './pages/Profile';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/product/:id' element={<ProductView />} />
          <Route path='/email-verify/:key' element={<EmailVerify />} />


          <Route path='/private' element={<PrivateRoute />}>
            <Route path='profile/' element={<Profile />} />
            <Route path='cart/' element={<Cart />} />
          </Route>

        </Routes>
      </BrowserRouter >

    </div>
  );
}

export default App;
