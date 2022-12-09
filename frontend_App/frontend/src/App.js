// import logo from './logo.svg';
// import './App.css';
import '@picocss/pico';
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Header from './components/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EmailVerify from './pages/EmailVerify';

import PrivateRoute from './functions/PrivateRoute';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/email-verify/:key' element={<EmailVerify />} />
          
          <Route path='/private' element={<PrivateRoute />}>
            <Route path='profile/' element={<Profile/>}/>
          </Route>

        </Routes>
      </BrowserRouter >

    </div>
  );
}

export default App;
