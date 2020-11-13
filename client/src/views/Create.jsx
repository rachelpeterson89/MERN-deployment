import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import PetForm from '../components/PetForm';

const Create = props => {

    const initialState = {
        name:"",
        type:"",
        desc:"",
        skill1:"",
        skill2:"",
        skill3:""
    }

    const [ petForm, setPetForm ] = useState(initialState);

    const [ errors, setErrors ] = useState({
        name:"",
        type:"",
        desc:""
    })

    const handleInputChange = e => {
        setPetForm({
            ...petForm,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/create/pets', petForm)
            .then(res => {
                if(res.data.results) {
                    navigate('/');
                } else {
                    console.log("there were errors!")
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="col-6 mx-auto my-4 d-flex">
                <h1 className="mx-auto text-center">Pet Shelter</h1>
                <Link 
                    className="btn btn-success"
                    to="/"
                    >Back to Home
                </Link>
            </div>

            <h2 className="mx-auto text-center">Know a pet needing a home?</h2>
            
            <PetForm 
                form={ petForm }
                handleInputChange={ handleInputChange }
                handleSubmit={ handleSubmit }
                errors={ errors }
                submitValue="Add Pet"
            />
        </div>
    )
}

export default Create;
