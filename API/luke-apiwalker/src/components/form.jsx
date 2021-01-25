import React, {useState} from 'react';
import {navigate} from "@reach/router";

const Form = () => {
    const[starwarsInfo, setstarwarsInfo] = useState({
        id:1,
        category:"people"
    })
    const handleChangeSelect = e => {
        // console.log(e.target.value)
        //updatedFormInputs is carrying the setData function from parent
        //copying over formInputs which is our data and then only changing the select key with
        //the e.target.value
        setstarwarsInfo({ 
            ...starwarsInfo,
            category: e.target.value
        })
    }

    const handleChangeId = e => {
        // console.log(e.target.value)
        setstarwarsInfo({
            ...starwarsInfo,
            id: e.target.value
        })
    }


    const submitHandler=e=>{
        e.preventDefault();
        console.log("submitting nothing")
        navigate(`/starwars/${starwarsInfo.category}/${starwarsInfo.id}`)
    }

    // const handleClick = e => {
    //     navigate(`/${formInputs.id}`)
        
    // }

    // const submitHandler=e=>{
    //     e.preventDefault();
    //     console.log("Submitting the Product", productInfo)
    //     Axios.post("http://localhost:8000/api/products/create", productInfo)
    //         .then(res=>{console.log(res)
    //         navigate("/")
    //         })
    //         .catch(err=>console.log(err))

    // }
    return (
        <div>
            
            <div className="jumbotron">

                <form className="d-flex justify-content-center align-items-center">
                    <div className="d-flex">
                        <h3>Search for:</h3>
                        <select className="mx-2" onChange={handleChangeSelect}>
                            <option value="people">People</option>
                            <option value="films">Films</option>
                            <option value="planets">Planets</option>
                            <option value="species">Species</option>
                            <option value="vehicles">Vehicles</option>
                            <option value="starships">StarShips</option>
                        </select>
                    </div>

                    <div className="d-flex mx-2">
                        <h3 className="mx-2">ID:</h3>
                        <input type="number" className="form-control form-control-sm width: 50px;margin: 2px;" onChange={handleChangeId} />
                    </div>
                    <input type="submit" className="btn btn-primary mx-2" value="Search" onClick={submitHandler}/>
                </form>
            </div>
        </div>
    );
};
export default Form;