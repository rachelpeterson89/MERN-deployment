import React, { useState, useEffect } from 'react';
import PetForm from '../components/PetForm';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Update = props => {

    const [ petForm, setPetForm ] = useState({
        name:"",
        type:"",
        desc:"",
        skill1:"",
        skill2:"",
        skill3:""
    })

    const [ errors, setErrors ] = useState({
        name:"",
        type:"",
        desc:""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${ props.id }`)
            // .then(res => console.log(res.data))
            .then(res => setPetForm(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    const handleInputChange = e => {
        setPetForm({
            ...petForm,
            [e.target.name]:e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${ props.id }`, petForm)
            .then(res => {
                if(res.data.results) {
                    navigate('/')
                } else {
                    setErrors(res.data)
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <div className="d-flex my-4 col-6 mx-auto">
                <h1 className="mx-auto text-center">Pet Shelter</h1>
                <Link 
                    className="btn btn-success"
                    to="/"
                    >Back to Home
                </Link>
            </div>
           
            <h2 className="mx-auto text-center">Edit { petForm.name }</h2>
            

            <div>
                <PetForm
                    form={ petForm }
                    errors={ errors }
                    value={ petForm.name }
                    handleInputChange={ handleInputChange }
                    submitValue="Update Pet"
                    handleSubmit={ handleUpdate }
                />
            </div>
        </>
    )
}

export default Update;
