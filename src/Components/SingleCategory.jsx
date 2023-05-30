import React, { useState } from 'react';
import "./SingleCategory.css";
import { useDispatch , useSelector } from 'react-redux';
import { addCartRequest, addCartSuccess, addCartFailure } from '../Redux/actionCreator';
import axios from 'axios';
import { BsBag } from "react-icons/bs";

const SingleCategory = ({ ele }) => {
    const [hovered, setHovered] = useState(false);
    const dispatch = useDispatch();
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
            alert("Item added to cart")
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
                <p>{ele.category}</p>
                <h4>{ele.name}</h4>
                <h4>${ele.price}</h4>
                <button onClick={() => handleClick(ele.id)}>
                    <div className="cartIcon"><BsBag/></div>
                    Add To Cart
                </button>
            </div>
            <div className={`${hovered ? '' : 'hidden'}`} id="desc">
                <h4>{ele.name}</h4><hr />
                <p>{ele.desc}</p><hr />
                <h5>{ele.weight}</h5>
                <button onClick={() => handleClick(ele.id)}>
                    <div className="cartIcon"><BsBag/></div>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default SingleCategory;
