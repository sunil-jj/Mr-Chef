import React, { useState } from 'react';
import "./SingleCategory.css";
import { useDispatch , useSelector } from 'react-redux';
import { addCartRequest, addCartSuccess, addCartFailure } from '../Redux/actionCreator';
import axios from 'axios';
import { BsBag } from "react-icons/bs";
import { useToast } from '@chakra-ui/react';
//import { Heading } from '@chakra-ui/react';

const SingleCategory = ({ ele }) => {
    const [hovered, setHovered] = useState(false);
    const dispatch = useDispatch();
    const toast = useToast();

    const data = useSelector((store)=> {
        return store.data;
    })

    const handleClick = (id) => {
        console.log(id);
        //post request
        console.log(data);
        let cartItem = data.filter((e , i)=>{
            return i === id-1;
        })
        console.log(cartItem);
        dispatch(addCartRequest());
        axios.post('http://localhost:8000/cart',cartItem)
        .then((res)=> {
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
        .catch((err)=> {
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
        <div onMouseEnter={showDetails} onMouseLeave={hideDetails} className="relative">
            <div key={ele.id} className={`${hovered ? 'hidden' : ''}`} id="default">
                <img src={ele.image} alt={ele.name} />
                <h3 style={{fontSize:20, fontFamily:'cursive', color:'grey'}}>{ele.category}</h3>
                <h2 style={{fontSize:25, fontFamily:'cursive'}}>{ele.name}</h2>
                <div className='price' style={{fontSize:20, fontFamily:'cursive'}}>
                    <h3>${ele.price}</h3>
                    <h4>{(ele.price*1.05).toFixed(2)}</h4>
                    <h3 style={{color:'green'}}><b>5% off</b></h3>
                </div>
                <button onClick={() => handleClick(ele.id)}>
                    <div className="cartIcon"><BsBag/></div>
                    Add To Cart
                </button>
            </div>
            <div className={`${hovered ? '' : 'hidden'}`} id="desc">
                <h4 style={{fontSize:20, fontFamily:'cursive'}}>{ele.name}</h4><hr />
                <p style={{fontSize:18, fontFamily:'cursive'}}>{ele.desc}</p><hr />
                <h4 style={{fontSize:20, fontFamily:'cursive'}}>{ele.weight}</h4>
                <button onClick={() => handleClick(ele.id)}>
                    <div className="cartIcon"><BsBag/></div>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default SingleCategory;
