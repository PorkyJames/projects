import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from '../../redux/productActions';


const HomePage = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    console.log(products, ">>>>>>This is products")

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

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