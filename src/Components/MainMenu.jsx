import React from 'react';
import styles from "./MainMenu.module.css";
import { Link } from 'react-router-dom';
import { GiPartyPopper } from "react-icons/gi";
import { FaHotdog } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";

import { FaGulp  } from "react-icons/fa";
import { RiCake3Line } from "react-icons/ri";
import { GiTacos } from "react-icons/gi";
import { TbSalad } from "react-icons/tb";
import { BiDish } from "react-icons/bi";
import { GiNoodles } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import { MdBakeryDining } from "react-icons/md";
import { GiSandwich } from "react-icons/gi";
import { Heading } from '@chakra-ui/react';

const MainMenu = () => {
    return (
        <div className="menuBox">
            <div className={styles.head} >
                <Heading size='lg' style={{fontFamily : 'cursive'}}>Our Menu</Heading>
            </div>
 
            <div className={styles.body}>
                <Link to='/CategoryDetails/streetFood'>
                    <div className={styles.container} >
                        <img className={styles.img} src="https://images.pexels.com/photos/3233275/pexels-photo-3233275.jpeg?auto=compress&cs=tinysrgb&w=600" alt="new" />
                        <div className={styles.centerIcon}>
                            <GiPartyPopper size={50} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>New</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&w=600" alt="shawarma" />
                        <div className={styles.centerIcon}>
                            <GiSandwich size={56} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>Shawarma</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/streetFood'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/2204769/pexels-photo-2204769.jpeg?auto=compress&cs=tinysrgb&w=600" alt="street_food" />
                        <div className={styles.centerIcon}>
                            <FaHotdog size={50} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>Street food</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pizza" />
                        <div className={styles.centerIcon}>
                            <FaPizzaSlice size={50} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>Pizza</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/streetFood'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/1775030/pexels-photo-1775030.jpeg?auto=compress&cs=tinysrgb&w=600" alt="East" />
                        <div className={styles.centerIcon}>
                            <MdBakeryDining size={56} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>East</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/1441122/pexels-photo-1441122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="drinks" />
                        <div className={styles.centerIcon}>
                            <FaGulp size={56} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>Drinks</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/streetFood'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=600" alt="dessert" />
                        <div className={styles.centerIcon}>
                            <RiCake3Line size={56} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>Dessert</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/1435896/pexels-photo-1435896.jpeg?auto=compress&cs=tinysrgb&w=600" alt="italian" />
                        <div className={styles.centerIcon}>
                            <GiCakeSlice size={56} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>Italian</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/streetFood'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=600" alt="chinese" />
                        <div className={styles.centerIcon}>
                            <GiNoodles size={50} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>Chinese</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600" alt="south-indian" />
                        <div className={styles.centerIcon}>
                            <BiDish size={56} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>South Indian</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/streetFood'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="north-indian" />
                        <div className={styles.centerIcon}>
                            <TbSalad size={56} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>North Indian</Heading>
                        </div>
                    </div>
                </Link>

                <Link to='/CategoryDetails/pizza'>
                    <div className={styles.container}>
                        <img className={styles.img} src="https://images.pexels.com/photos/2230540/pexels-photo-2230540.jpeg?auto=compress&cs=tinysrgb&w=600" alt="continental" />
                        <div className={styles.centerIcon}>
                            <GiTacos size={56} />
                        </div>
                        <div className={styles.centered}>
                            <Heading size='md' style={{fontFamily : 'cursive'}}>Continental</Heading>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default MainMenu;