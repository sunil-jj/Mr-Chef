import React from 'react';
import "./MainMenu.css";
import { Link } from 'react-router-dom';
import { GiPartyPopper } from "react-icons/gi";
import { FaHotdog } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { CiGlass } from "react-icons/ci";
import { RiCake3Line } from "react-icons/ri";
import { GiTacos } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { BiDish } from "react-icons/bi";
import { GiNoodles } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import { MdBakeryDining } from "react-icons/md";
import { GiSandwich } from "react-icons/gi";


//import { Navigate } from "react-router-dom";
//import { useState } from 'react';


const MainMenu = () => {
    //const [category, setCategory] = useState("");
    //const handleClick =() => {
    //    <Navigate to="/"></Navigate>
    //}
    return (
        <div className="menuBox">
            <div className="head">
                <h3>Our Menu</h3>
            </div>

            <div className="body">
                <Link to='/CategoryDetails/streetFood'>
                    <div className="container">
                        <img src="https://images.pexels.com/photos/3233275/pexels-photo-3233275.jpeg?auto=compress&cs=tinysrgb&w=600" alt="new" />
                        <div className="centerIcon">
                            <GiPartyPopper size={50} />
                        </div>
                        <div className="centered">
                            <p>New</p>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                <div className="container">
                    <img src="https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&w=600" alt="shawarma" />
                    <div className="centerIcon">
                        <GiSandwich size={56} />
                    </div>
                    <div className="centered">
                        <p>Shawarma</p>
                    </div>
                </div>
                </Link>

                <Link to='/CategoryDetails/streetFood'>
                    <div className="container">
                        <img src="https://images.pexels.com/photos/2204769/pexels-photo-2204769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="street_food" />
                        <div className="centerIcon">
                            <FaHotdog size={50} />
                        </div>
                        <div className="centered">
                            <p>Street food</p>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                    <div className="container">
                        <img src="https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pizza" />
                        <div className="centerIcon">
                            <FaPizzaSlice size={50} />
                        </div>
                        <div className="centered">
                            <p>Pizza</p>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/streetFood'>
                <div className="container">
                    <img src="https://images.pexels.com/photos/1775030/pexels-photo-1775030.jpeg?auto=compress&cs=tinysrgb&w=600" alt="East" />
                    <div className="centerIcon">
                        <MdBakeryDining size={56} />
                    </div>
                    <div className="centered">
                        <p>East</p>
                    </div>
                </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                <div className="container">
                    <img src="https://images.pexels.com/photos/1441122/pexels-photo-1441122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="drinks" />
                    <div className="centerIcon">
                        <CiGlass size={56} />
                    </div>
                    <div className="centered">
                        <p>Drinks</p>
                    </div>
                </div>
                </Link>

                <Link to='/CategoryDetails/streetFood'>
                <div className="container">
                    <img src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dessert" />
                    <div className="centerIcon">
                        <RiCake3Line size={56} />
                    </div>
                    <div className="centered">
                        <p>Dessert</p>

                    </div>
                </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                <div className="container">
                    <img src="https://images.pexels.com/photos/1435896/pexels-photo-1435896.jpeg?auto=compress&cs=tinysrgb&w=600" alt="italian" />
                    <div className="centerIcon">
                        <GiCakeSlice size={56} />
                    </div>
                    <div className="centered">
                        <p>Italian</p>
                    </div>
                </div>
                </Link>

                <Link to='/CategoryDetails/streetFood'>
                <div className="container">
                    <img src="https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=600" alt="chinese" />
                    <div className="centerIcon">
                        <GiNoodles size={50} />
                    </div>
                    <div className="centered">
                        <p>Chinese</p>
                    </div>
                </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                <div className="container">
                    <img src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600" alt="south-indian" />
                    <div className="centerIcon">
                        <BiDish size={56} />
                    </div>
                    <div className="centered">
                        <p>South-Ind</p>
                    </div>
                </div>
                </Link>

                <Link to='/CategoryDetails/streetFood'>
                <div className="container">
                    <img src="https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="north-indian" />
                    <div className="centerIcon">
                        <TbSalad size={56} />
                    </div>
                    <div className="centered">
                        <p>North-Ind</p>
                    </div>
                </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                <div className="container">
                    <img src="https://images.pexels.com/photos/2230540/pexels-photo-2230540.jpeg?auto=compress&cs=tinysrgb&w=600" alt="continental" />
                    <div className="centerIcon">
                        <GiTacos size={56} />
                    </div>
                    <div className="centered">
                        <p>Continental</p>
                    </div>
                </div>
                </Link>
            </div>

        </div>
    )
}

export default MainMenu;