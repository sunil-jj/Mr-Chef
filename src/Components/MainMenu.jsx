import React from 'react';
import "./MainMenu.css";


const MainMenu = () => {
    return (
        <div className="menuBox">
            <div className="head"><h1>Our Menu</h1></div>

            <div className="body">
                <div className="container">
                    <img src="https://images.pexels.com/photos/3233275/pexels-photo-3233275.jpeg?auto=compress&cs=tinysrgb&w=600" alt="new" />
                    
                    <div className="centered">New</div>
                </div>
                <div className="container">
                    <img src="https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&w=600" alt="shawarma" />
                    <div className="centered">Shawarma</div>
                </div>
                <div className="container">
                    <img src="https://images.pexels.com/photos/2204769/pexels-photo-2204769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="street_food" />
                    <div className="centered">Street Food</div>
                </div>
                <div className="container">
                    <img src="https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pizza" />
                    <div className="centered">Pizza</div>
                </div>
                <div className="container">
                    <img src="https://images.pexels.com/photos/1775030/pexels-photo-1775030.jpeg?auto=compress&cs=tinysrgb&w=600" alt="East" />
                    <div className="centered">East</div>
                </div>
                <div className="container">
                    <img src="https://images.pexels.com/photos/1441122/pexels-photo-1441122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="drinks" />
                    <div className="centered">Drinks</div>
                </div>
                <div className="container">
                    <img src="" alt="" />
                </div>
                <div className="container">
                    <img src="" alt="" />
                </div>
                <div className="container">
                    <img src="" alt="" />
                </div>
                <div className="container">
                    <img src="" alt="" />
                </div>
                <div className="container">
                    <img src="" alt="" />
                </div>
                <div className="container">
                    <img src="" alt="" />
                </div>
            </div>

        </div>
    )
}

export default MainMenu;