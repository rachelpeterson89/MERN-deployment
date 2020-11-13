import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Detail = props => {

    const [ pet, setPet ] = useState([]);

    const [ adopt, setAdopt ] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${ props.id }`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    const adoptPet = (id, name) => {
        axios.delete(`http://localhost:8000/api/pets/adopt/${ id }`)
            .then(res => {
                if(res.data.results) {
                    setAdopt(!adopt);
                    navigate('/')
                    console.log(`${name} was adopted! Thank you!`)
                }
            })
            .catch(err => console.log(err))
    }

    // const likePet = (id, name) => {
    //     axios.put(`http://localhost:8000/api/pets/update/${ id }`)
    // }

    return (
        <>
            <div className="col-6 mx-auto my-4 d-flex">
                <h1 className="mx-auto text-center">Pet Shelter</h1>
                <Link 
                    className="btn btn-success"
                    to="/"
                    >Back to Home
                </Link>
            </div>
            
            <h2 className="mx-auto text-center">Details about { pet.name }</h2>

            <div className="card col-6 mx-auto">
                <div className="card-body">
                    <div className="card-title">Name: { pet.name }</div>
                    <p className="card-text">Type: { pet.type }</p>
                    <p className="card-text">Description: { pet.desc }</p>
                    <p className="font-weight-bold">Skills:</p>
                    <p className="card-text">{ pet.skill1 }</p>
                    <p className="card-text">{ pet.skill2 }</p>
                    <p className="card-text">{ pet.skill3 }</p>
                </div>
            </div> 

            <button 
                className="btn btn-danger"
                onClick={() => {adoptPet(pet._id, pet.name)}}
                >Adopt Pet
            </button>

            {/* <button
                className="btn btn-success"
                onClick={() => {likePet(pet._id, pet.name)}}
                >Like This Pet
            </button> */}
        </>
    )
}

export default Detail;
