import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';

import Services from './components/Services';
import Products from './components/Products';
import CreateAuction from './components/CreateAuction';
import Profile from './components/Profile';
import UserProfile from './components/UserProfile';
import Register from './components/Register';
import Login from './components/Login';

import Wallet from './components/Wallet';
import { BidPage } from './components/BidPage';
import Forgotpassword from './components/Forgotpassword';
import VerifyForgotToken from './components/VerifyForgotToken';
import Contact from './components/Contactus/Contactus';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/aboutus' element={<Aboutus/>} /> */}
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products countdownTimestampMs={1659983662000}/>} />
        <Route path='/product/:id' exact element={<BidPage />} />
        <Route path='/createauction' element={<CreateAuction/>} />
        {/* <Route path='/profile' element={<Profile/>} /> */}
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/wallet' element={<Wallet/>} />
        <Route path='/forgotpassword' element={<Forgotpassword/>} />
        <Route path='/verify/:token' element={<VerifyForgotToken/>} />
      </Routes>
    </Router>
  );
}

export default App;
