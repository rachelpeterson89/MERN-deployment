const PetForm = props => {

    const { form, errors, handleInputChange, handleSubmit, submitValue } = props;

    return (
        
        <form onSubmit={ handleSubmit } className="col-6 mx-auto border">

            <div className="form-group">
                <label>Pet Name:</label>
                <input 
                    type="text" 
                    name="name"
                    value={ form.name }
                    className="form-control"
                    onChange={ handleInputChange }
                />
                <span className="text-danger">{ errors.name ? errors.name.message : "" }</span>
            </div>

            <div className="form-group">
                <label>Pet Type:</label>
                <input 
                    type="text" 
                    name="type"
                    value={ form.type }
                    className="form-control"
                    onChange={ handleInputChange }
                />
                <span className="text-danger">{ errors.type ? errors.type.message : "" }</span>
            </div>

            <div className="form-group">
                <label>Pet Description:</label>
                <input 
                    type="text" 
                    name="desc"
                    value={ form.desc }
                    className="form-control"
                    onChange={ handleInputChange }
                />
                <span className="text-danger">{ errors.desc ? errors.desc.message : "" }</span>
            </div>

            <h3>Skills (optional)</h3>

            <div className="form-group">
                <label>Skill 1:</label>
                <input 
                    type="text" 
                    name="skill1"
                    value={ form.skill1 }
                    className="form-control"
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <label>Skill 2:</label>
                <input 
                    type="text" 
                    name="skill2"
                    value={ form.skill2 }
                    className="form-control"
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <label>Skill 3:</label>
                <input 
                    type="text" 
                    name="skill3"
                    value={ form.skill3 }
                    className="form-control"
                    onChange={ handleInputChange }
                />
            </div>

            <input type="submit" value={ submitValue } className="btn btn-primary"/>

        </form>
    )
}

export default PetForm;