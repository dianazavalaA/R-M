import React from "react";
import { Link } from 'react-router-dom'

function Characters({ characters = [] }) {
    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{ minwidth: "200px" }}>
                        <img src={item.image} alt="" />
                        <div className="card-boby">
                            <h5 className="card-title">{item.name}</h5>
                            <hr />
                        </div>
                       
                            <div>
                                <Link class="bg-gray-500 hover:bg-black-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-300 py-1 px-3 rounded" to= {`/Information/${item.id}`}>Information</Link>
                            </div>
                       
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Characters