import React , {useState, useEffect} from 'react';
import axios from 'axios';


const Item = (props) => {
    const [link, setlink] = useState(<></>);
    useEffect(() => {
        axios.get(props.url).then(response =>{ 
            setlink(response.data.title)})
    }, [setlink]);
    const pathLink = `/starwars/${props.url.split("/")[4]}/${props.url.split("/")[5]}`

    return (
        <div>
            <a href={pathLink}>{link}</a> 
            {/* {link} */}
        </div>
    );
};


export default Item;