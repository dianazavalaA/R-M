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
                    <button className="page-link" onClick={handlePrevious}>Previous</button>
                </li>
            ) : null}
            {next ? ( 
            
                <li className="page-item">
                    <button className="page-link" onClick={handleNext}>Next</button>
                </li> 
           ) : null}
        </ul>
    </nav>
  )
}

export default Pagination