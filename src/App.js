import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Products from './components/Products';
import CreateAuction from './components/CreateAuction';
import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';
import Contactus from './components/Contactus';
import Wallet from './components/Wallet';
import { BidPage } from './components/BidPage';
import Forgotpassword from './components/Forgotpassword';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products countdownTimestampMs={1659983662000}/>} />
        <Route path='/product/:id' exact element={<BidPage />} />
        <Route path='/createauction' element={<CreateAuction/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contactus' element={<Contactus/>} />
        <Route path='/wallet' element={<Wallet/>} />
        <Route path='/forgotpassword' element={<Forgotpassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
