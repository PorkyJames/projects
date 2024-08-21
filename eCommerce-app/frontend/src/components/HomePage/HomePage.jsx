import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from '../../redux/productActions';
import '../HomePage/HomePage.css'

const HomePage = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    // console.log(products, ">>>>>>This is products")

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <>

            <h1> eCommerce Website Prototype </h1>

            <div className="intro-banner">
                <div className="intro-banner-text">
                    <h2>Discover Our Latest Products</h2>
                    <button>See Featured Items!</button>
                </div>
            </div>

            <div className="all-product-list">
                {products.map((product) => (
                        <ul key={product._id}>
                            <img src={product.imageUrl} alt='product-image'/>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <button>Add to Cart</button>
                        </ul>
                
                ))}
            </div>

        </>
    )

}

export default HomePage;
