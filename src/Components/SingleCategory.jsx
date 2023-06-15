import React, { useState } from 'react';
import styles from "./SingleCategory.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addCartRequest, addCartSuccess, addCartFailure } from '../Redux/actionCreator';
import axios from 'axios';
import { BsBag } from "react-icons/bs";
import { useToast } from '@chakra-ui/react';

const SingleCategory = ({ id, image, name, category, price, desc, weight }) => {
    const [hovered, setHovered] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    const data = useSelector((store) => {
        return store.reducer.data;
    })

    const handleClick = (id) => {
        console.log(id);
        //post request
        console.log(data);
        let cartItem = data.filter((e, i) => {
            return i === id - 1;
        })
        console.log(cartItem);
        dispatch(addCartRequest());
        axios.post('https://mrchef-vhy8.onrender.com/cart', cartItem[0])
            .then((res) => {
                console.log(res);
                dispatch(addCartSuccess(res.data))
                toast({
                    title: 'Added To Cart',
                    description: "Item Successfully Added To Cart",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            })
            .catch((err) => {
                console.log(err);
                dispatch(addCartFailure())
            })
    }

    const showDetails = () => {
        setHovered(true);
    }

    const hideDetails = () => {
        setHovered(false);
    }

    return (
        <div onMouseEnter={showDetails} onMouseLeave={hideDetails} className={styles.relative}>
            <div key={id} className={`${hovered ? styles.hidden : ''}`} id="default"
                style={{
                    width: "90%",
                    height: "400px",
                    padding: "20px",
                    textAlign: "center",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "10px",
                }}>
                <img src={image} alt={name} className={styles.img} />
                <h3 style={{ margin: "auto", marginTop: "20px", fontSize: 20, fontFamily: 'cursive', color: 'grey' }}>{category}</h3>
                <h2 style={{ margin: "auto", marginTop: "20px", fontSize: 25, fontFamily: 'cursive' }}>{name}</h2>
                <div className="price" style={{ display: "flex", justifyContent: "center", fontSize: 20, fontFamily: 'cursive' }}>
                    <h3 style={{ padding: "5px" }}>${price}</h3>
                    <h4 style={{ padding: "5px", textDecoration: "line-through" }}>{(price * 1.05).toFixed(2)}</h4>
                    <h3 style={{ color: 'green', padding: "5px" }}><b>5% off</b></h3>
                </div>
                <button onClick={() => handleClick(id)}
                    style={{
                        backgroundColor: "yellow",
                        borderRadius: "10px",
                        padding: "10px",
                        color: "black",
                        marginLeft: "30%",
                        height: "13%",
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "9%"
                    }}>
                    <div className={styles.cartIcon}><BsBag /></div>
                    Add To Cart
                </button>
            </div>

            <div className={`${hovered ? '' : styles.hidden}`} id="desc"
                style={{
                    width: "90%",
                    height: "400px",
                    padding: "20px",
                    textAlign: "center",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "10px"
                }}>
                <h4 style={{ fontSize: 20, fontFamily: 'cursive', margin: "auto", height: "20%", marginTop: "50px" }}>{name}</h4><hr />
                <p style={{ fontSize: 18, fontFamily: 'cursive', margin: "auto", height: "20%", marginTop: "25px", marginBottom: "25px" }}>{desc}</p><hr />
                <h4 style={{ fontSize: 20, fontFamily: 'cursive', margin: "auto", height: "20%", marginTop: "50px" }}>{weight}</h4>
                <button onClick={() => handleClick(id)}
                    style={{
                        backgroundColor: "yellow",
                        borderRadius: "10px",
                        padding: "10px",
                        color: "black",
                        marginLeft: "30%",
                        height: "13%",
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "-3.5%"
                    }}>
                    <div className={styles.cartIcon}><BsBag /></div>
                    Add To Cart
                </button>
            </div>
        </div >
    )
}

export default SingleCategory;
