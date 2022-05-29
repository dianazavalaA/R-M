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
               <table class="w-full">
                <thead class="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th>Status</th>
                    <th>Species</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr class= "bg-white">
                      <td class="p-3 text-sm text-gray-700">{item.status}</td>
                      <td class="p-3 text-sm text-gray-700">{item.species}</td>
                      <td class="p-3 text-sm text-gray-700">{item.gender}</td>
                    </tr>
                  </tbody>
                </table>
               </div>
        </div>
    );
}

export default InformationC