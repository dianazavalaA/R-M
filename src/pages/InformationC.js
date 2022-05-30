import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Characters from "../components/Characters";
import { Link } from 'react-router-dom'


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
                    <th>Character Name</th>
                    <th>Status</th>
                    <th>Species</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr class= "bg-white">
                      <td class="p-3 text-sm text-gray-700">{item.name}</td>
                      <td class="p-3 text-sm text-gray-700">{item.status}</td>
                      <td class="p-3 text-sm text-gray-700">{item.species}</td>
                      <td class="p-3 text-sm text-gray-700">{item.gender}</td>
                    </tr>
                  </tbody>
                </table>

                <Link class="bg-gray-500 hover:bg-black-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 py-1 px-3 rounded" to="Characters">Home</Link>

               </div>
        </div>
    );
}

export default InformationC