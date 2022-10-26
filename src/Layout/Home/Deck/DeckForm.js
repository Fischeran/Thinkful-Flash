import React from "react";
import { Link } from "react-router-dom";


function DeckForm({ deckId, submitHandler, formData, changeHandler }) {
    return (
        
            <form onSubmit={(event) => submitHandler(event)}>

            <div className="row col-4">
                <label htmlFor="name">Name</label>
            </div>

            <div className="row col-4">
                <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={(event) => changeHandler(event)} required />  
            </div>

            <div className="row col-4">
                <label htmlFor="description">description</label>
            </div>

            <div className="row col-4">
                <textarea id="description" className="form-control" name="description" value={formData.description} onChange={(event) => changeHandler(event)} required />
            </div>
            <div className="row p-2 col-4 btn-toolbar" style={{}} >
            {deckId ? <Link to={`/decks/${deckId}`} className="btn btn-secondary p-2">Cancel</Link> : <Link to={`/`} className="btn btn-secondary p-2">Cancel</Link>}


                <button type="submit"  className="btn btn-primary p-2">Submit</button>
            </div> 
            </form>

    )
}

export default DeckForm