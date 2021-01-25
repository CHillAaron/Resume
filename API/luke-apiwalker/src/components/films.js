import React , {useState, useEffect}from 'react';
import axios from 'axios';



const Film = (props) => {
    const [Guide, setGuide] = useState ({})

    useEffect(()=>{
    axios.get(`http://swapi.dev/api/films/${props.id}`)
        .then(response =>{ console.log(response)
        setGuide(response.data)
        })
        .catch(err=> console.log(err))
    },[props])

    return (
        <div>
            <p>Title: {Guide.title}</p>
            <p>Producer(s) {Guide.producer}</p>
            <p>Episode Number: {Guide.episode_id}</p> 
            <p>{Guide.opening_crawl}</p>
            
        </div>
    );
};

export default Film;