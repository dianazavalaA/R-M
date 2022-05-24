import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function InformationC() {

    let {id} = useParams();
    console.log(id)
    
    const [item, setItem] = useState({});

    const initialUrl =  `https://rickandmortyapi.com/api/character/${id}`;

    
  const fetchItem = (url) =>{    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setItem(data);
    })
    .catch(error => console.log(error));
    };
    
    useEffect(() => {
        fetchItem(initialUrl);
      }, [])

    return (
        <div>
               <div>
                    <h6>{item.status}</h6>
                    <h6>{item.species}</h6>
                    <h6>{item.gender}</h6>
                    <hr />
               </div>
          
        </div>
    );
}

export default InformationC