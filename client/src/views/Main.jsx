import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const Main = props => {

    const [ pets, setPets ] = useState([]);

    // Switch a,z position in function parameters to order ascending or descending
    pets.sort(function(a,z) {
        if ( a.type < z.type ) return -1;
        if ( z.type > a.type ) return 1;
        return 0;
    })

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="col-6 mx-auto">
            <div className="d-flex my-4">
                <h1 className="mx-auto text-center">Pet Shelter</h1>
                <Link 
                    className="btn btn-secondary"
                    to="/pets/new"
                    >Add a Pet to the Shelter
                </Link>
            </div>

            <h2 className="mx-auto text-center">These pets are looking for a good home</h2>

            <table className="table-hover col-12 mx-auto border p-2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        pets.map((pet, i) => <tr key={i}>
                            <td>{ pet.name }</td>
                            <td>{ pet.type }</td>
                            <td>
                                <Link 
                                    className="btn btn-info"
                                    to={`/pets/${ pet._id }`}
                                    >Details
                                </Link>

                                <Link 
                                    className="btn btn-primary"
                                    to={`/pets/${ pet._id }/edit`}
                                    >Edit
                                </Link>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;
