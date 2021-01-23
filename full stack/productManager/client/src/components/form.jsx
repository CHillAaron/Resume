import React,  {useState} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Form =() =>{
    const [productInfo, setproductInfo] = useState({
        title: "",
        price: 0,
        description:""
    })

    const changeHandler = (e)=> {
        console.log("Making a new product?", e.target.name)
        setproductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler=e=>{
        e.preventDefault();
        console.log("Submitting the Product", productInfo)
        Axios.post("http://localhost:8000/api/products/create", productInfo)
            .then(res=>{console.log("Response after submitting the axios post request",res)
            navigate("/")
            })
            .catch(err=>console.log("This is the errors:",err))

    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" name="price" onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" onChange={changeHandler}/>
                </div>
                <input type="submit" value="Create"/>
            </form>
        </>
    )
}

export default Form