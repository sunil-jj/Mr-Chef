import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleCategory from './SingleCategory';
import "./CategoryDetails.css";
import { useSelector , useDispatch } from "react-redux";

import {getDataRequest, getDataSuccess, getDataFailure} from "../Redux/actionCreator";

const CategoryDetails = () => {
    const { category } = useParams(); 
    const dispatch = useDispatch();
    const data = useSelector((store)=> {
        return store.data;
    })

    useEffect(() => {
        dispatch(getDataRequest());
        axios.get(`http://localhost:8000/${category}`)
            .then((res) =>{
                dispatch(getDataSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getDataFailure());
                console.log(err);
            })
    })

    return (
        <div className="items">
            {
                data.length > 0 && data.map((ele, i) => {
                    return (
                        <SingleCategory key = {i} ele={ele} />
                    )

                })
            }
        </div>
    )
}
export default CategoryDetails;
