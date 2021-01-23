import React,  {useState, useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';


const Update = (props) => {
    const [productInfo, setproductInfo] = useState({
        title: "",
        price: 0,
        description:""
    })

    useEffect(()=>{
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res=> {
            console.log("got the response back to update one Product", res)
            setproductInfo(res.data.results)
        })
        .catch(err=>console.log("error", err))
    },[])

    const changeHandler = (e)=> {
        console.log("Updating a product?", e.target.name)
        setproductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler=e=>{
        e.preventDefault();
        
        console.log("updating this Product:", productInfo)
        Axios.put(`http://localhost:8000/api/products/update/${productInfo._id}`, productInfo)
            .then(res=>{console.log("Response after submitting the axios post request",res)
            navigate('/')
            })
            .catch(err=>console.log("This is the errors:",err))

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={changeHandler} value={productInfo.title} name="title"/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" onChange={changeHandler} value={productInfo.price} name="price"/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="textbox" onChange={changeHandler} value={productInfo.description} name="description"/>
                </div>
                <input type="submit" value="Update Product"/>
            </form>
        </div>
    );
};


export default Update;