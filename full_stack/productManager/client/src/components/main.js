import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { Link } from "@reach/router";


const Main = () => {
    //If i want it to run some function upon rendering of this component, I want to use  useEffect
    const [allproducts, setallproducts] = useState([])
    const [deleteClicked, setdeleteClicked] = useState(false)
    useEffect(()=>{
        Axios.get("http://localhost:8000/api/product")
            .then(response => {
                console.log(response)
                response.data.results.sort(function(a,b){
                    return a.price - b.price;
                })
                setallproducts(response.data.results)
            })
            .catch(err=> console.log(err))
        
    },[deleteClicked])
    // ^ rerenders when it is changed. can put allproducts there also for when that is updated

    const deleteClickHandler = (e, productId)=>{
        console.log(productId)
        Axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then(res =>{
                console.log(res)
                setdeleteClicked(!deleteClicked)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <table className = "table table-dark col-8 mx-auto">
                <thead>
                    <tr>
                        <th>Product:</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allproducts.map((product, i)=>{
                            return <tr key = {i}>
                                <td>{product.title}</td>
                                <td>${product.price}</td> 
                                <td>{product.description}</td>
                                <td><Link className="btn btn-info m-1" to={`/product/${product._id}`}>View</Link>
                                <Link className="btn btn-warning m-1" to={`/product/update/${product._id}`}>edit</Link>
                                <button className="btn btn-danger m-1" onClick={(e)=>deleteClickHandler(e,product._id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};



export default Main;