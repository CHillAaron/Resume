import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const ProductInfo = (props) => {
    const [productDetails, setproductDetails] = useState({})

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res=> {
            console.log("got the response back to find one Product", res)
            setproductDetails(res.data.results)
        })
        .catch(err=>console.log("error", err))
    },[])
    return (
        <div>
            <h3> Here is info about Produc:t</h3>
            <p className="font-weight-bold h-50">{productDetails.title}</p>
            <h3>Price of product</h3>
            <p className="font-weight-bold h-50">{productDetails.price}</p>
            <h3>Description of the product</h3>
            <p className="font-weight-bold h-50">{productDetails.description}</p>
        </div>
    );
};


export default ProductInfo;