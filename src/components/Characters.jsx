import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function Characters({ characters }) {

    return (
        <div className='row'>
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ minWidth: "200px"}}>
                            <img width="200px" src={item.image} alt="image" />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr />
                                <p>Location: {item.location.name}</p>
                                <p>Specie: {item.species}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters;