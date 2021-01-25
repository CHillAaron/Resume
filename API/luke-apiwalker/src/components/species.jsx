import React , {useState, useEffect}from 'react';
import axios from 'axios';



const Species = (props) => {
    const [Guide, setGuide] = useState ({})

    useEffect(()=>{
    axios.get(`http://swapi.dev/api/species/${props.id}`)
        .then(response =>{ console.log(response)
        setGuide(response.data)
        })
        .catch(err=> console.log(err))
    },[props])

    return (
        <div>
            <p>Name: {Guide.name}</p>
            {/* <p>{Guide.planets}</p> */}
            <p>Classification: {Guide.classification}</p>
            <p>designation: {Guide.designation}</p> 
        </div>
    );
};

export default Species;