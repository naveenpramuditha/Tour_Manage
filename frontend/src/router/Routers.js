import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../components/Pages/Home';
import Login from '../components/Pages/Login';
import Register from '../components/Pages/Register';
import SearchResultList from '../components/Pages/SearchResultList';
import TourDetails from '../components/Pages/TourDetails';
import Tours from '../components/Pages/Tours';
import ThankYou from '../components/Pages/ThankYou';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path='/tours' element={<Tours/>} />
        <Route path='/tours/:id' element={<TourDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/thank-you' element={<ThankYou/>} />
        <Route path='/tours/search' element={<SearchResultList/>} />
    </Routes>
  );
};

export default Routers