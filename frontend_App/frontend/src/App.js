// import logo from './logo.svg';
// import './App.css';
import '@picocss/pico';
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Header from './components/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
<<<<<<< HEAD
=======
import EmailVerify from './pages/EmailVerify';

import PrivateRoute from './functions/PrivateRoute';
>>>>>>> django_drf
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
<<<<<<< HEAD
          <Route path='/profile' element={<Profile />} />
=======
          <Route path='/email-verify/:key' element={<EmailVerify />} />
          
          <Route path='/private' element={<PrivateRoute />}>
            <Route path='profile/' element={<Profile/>}/>
          </Route>

>>>>>>> django_drf
        </Routes>
      </BrowserRouter >

    </div>
  );
}

export default App;
