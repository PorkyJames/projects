import React from 'react';
import { useSelector } from "react-redux"


const HomePage = () => {

    const products = useSelector((state) => state.products);

    return (
        <>
            <h1> Home Page </h1>
            {products.map((product) => (
                <li>
                    <p>{product.name}</p>
                </li>
            ))}
        </>
    )

}

export default HomePage;