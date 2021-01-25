import React , {useState, useEffect}from 'react';
import axios from 'axios';



const Starship = (props) => {
    const [Guide, setGuide] = useState ({})

    useEffect(()=>{
    axios.get(`http://swapi.dev/api/starships/${props.id}`)
        .then(response =>{ console.log(response)
        setGuide(response.data)
        })
        .catch(err=> console.log(err))
    },[props])

    return (
        <div>
            <p>Ship Name: {Guide.name}</p>
            {/* <p>{Guide.planets}</p> */}
            <p>Model: {Guide.model}</p>
            <p>Crew: {Guide.crew}</p> 
            <p>Manufacturer: {Guide.manufacturer}</p>
        </div>
    );
};

export default Starship;