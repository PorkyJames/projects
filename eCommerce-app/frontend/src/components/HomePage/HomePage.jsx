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
                
                <ul key={product._id}>
                    <img src={product.imageUrl} alt='product-image'/>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </ul>
            
            ))}
        </>
    )

}

export default HomePage;