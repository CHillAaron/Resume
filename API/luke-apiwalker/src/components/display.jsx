import React , {useState, useEffect}from 'react';
import axios from 'axios';



const Display = (props) => {
    const [Guide, setGuide] = useState ({})

    useEffect(()=>{
    axios.get(`http://swapi.dev/api/${props.category}/${props.id}`)
        .then(response =>{ console.log(response)
            axios.get(`http://swapi.dev/api/planets/${props.id.homeworld}`)
            .then(res => {console.log(res)
            setGuide(res.data)
        })
        
        })
        .catch(err=> console.log(err))
    },[props])

    return (
        <div>

            <p>Name: {Guide.name}</p>
            <p>Eye Color: {Guide.eye_color}</p>
            <p>Gender: {Guide.gender}</p>
            <p>species: {Guide.species}</p>
            <p>{Guide.title}</p>
            {/* <p>{Guide.planets}</p> */}
            <p>{Guide.producers}</p>
            <p>{Guide.climate}</p> 
            
        </div>
    );
};

export default Display;