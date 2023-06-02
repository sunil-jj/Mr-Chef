import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleCategory from './SingleCategory';
import "./CategoryDetails.css";
import { useSelector, useDispatch } from "react-redux";

import { getDataRequest, getDataSuccess, getDataFailure } from "../Redux/actionCreator";

const CategoryDetails = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const data = useSelector((store) => {
        return store.data;
    })

    useEffect(() => {
        dispatch(getDataRequest());
        axios.get(`http://localhost:8000/streetFood`)
            .then((res) => {
                dispatch(getDataSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getDataFailure());
                console.log(err);
            })
    })

    return (
        <div>
            <div>
                <input className="searchBar" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="items">
                {
                    data.length > 0 && data.filter((item) => {
                        return search.toLowerCase() === ""
                            ? item
                            : item.name.toLowerCase().includes(search)
                    }).map((ele, i) => {
                        return (
                                <SingleCategory key={i} 
                                id={ele.id} 
                                image={ele.image} 
                                name={ele.name} 
                                category={ele.category} 
                                price={ele.price}
                                desc={ele.desc}
                                weight={ele.weight}/>
                            )

                    })
                }
            </div>
        </div>
    )
}
export default CategoryDetails;
