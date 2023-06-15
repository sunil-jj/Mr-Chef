import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleCategory from './SingleCategory';
import styles from "./CategoryDetails.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getDataRequest, getDataSuccess, getDataFailure } from "../Redux/actionCreator";

const CategoryDetails = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const data = useSelector((store) => {
        return store.reducer.data;
    });

    const isLoading = useSelector((store) => {
        return store.reducer.isLoading;
    });

    useEffect(() => {
        dispatch(getDataRequest());
        console.log(category);
        axios.get(`https://mrchef-vhy8.onrender.com/${category}`)
            .then((res) => {
                dispatch(getDataSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getDataFailure());
                console.log(err);
            });
    }, [category, dispatch]);

    return (
        <div style={{ marginBottom: "50px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input className={styles.searchBar} type="text" placeholder="Search food" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className={styles.items}>
                {isLoading ? (
                    <p style={{color:"#EBC94A",fontSize:"50px", display:"flex", justifyContent:"center", alignItems:"center"}}>Foods Loading...</p>
                ) : (
                    data.length > 0 &&
                    data
                        .filter((item) =>
                            search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
                        )
                        .map((ele, i) => (
                            <SingleCategory
                                key={i}
                                id={ele.id}
                                image={ele.image}
                                name={ele.name}
                                category={ele.category}
                                price={ele.price}
                                desc={ele.desc}
                                weight={ele.weight}
                            />
                        ))
                )}
            </div>
        </div>
    );
};

export default CategoryDetails;
