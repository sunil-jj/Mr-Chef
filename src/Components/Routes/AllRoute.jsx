import React from 'react';
import MainMenu from '../MainMenu';
import HomePage from '../HomePage';
import {Signup} from "../Signin_Signup/Signup"
import About from "../About"
import Contact from "../Contact"
import YourOrder from "../YourOrder"
import CategoryDetails from "../CategoryDetails"
import Checkout from "../checkout"
import { Route, Routes } from 'react-router-dom';
function AllRoute() {
    return (
        <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/menu" element={<MainMenu/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/cart" element={<YourOrder/>}/>
           <Route path="/CategoryDetails/:category" element={<CategoryDetails/>}/>
           <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
    );
}

export default AllRoute;