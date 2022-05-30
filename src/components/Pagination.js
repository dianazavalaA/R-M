import React from 'react'
//props para poder manejar los eventos / clicks del botón
const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () =>{
        onNext();
    }

  return (
    <nav className="my-5">
        <ul className="pagination justify-content-center">
            {prev ? (
            
                <li className='page-item'>
                    <button class="bg-sky-600 hover:bg-sky-700 rounded" onClick={handlePrevious}>Previous</button>
                </li>
            ) : null}
            {next ? ( 
            
                <li className="page-item">
                    <button class="bg-sky-600 hover:bg-sky-700 rounded" onClick={handleNext}>Next</button>
                </li> 
           ) : null}
        </ul>
    </nav>
  )
}

export default Pagination