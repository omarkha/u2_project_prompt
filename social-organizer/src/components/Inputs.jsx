import React from "react";
import Textbox from "./Textbox";
import Button from "./Button";

const Inputs = () => {
    return (
        <div className="inputs">
            <label>Name </label>
           <Textbox />
           <label>Age </label>
           <Textbox />
           <label>Gender </label>
           <Textbox />
           <label>Relationship </label>
           <Textbox />
           <label>Country </label>
           <Textbox />
           <label>State </label>
           <Textbox />
           <label>Email </label>
           <Textbox />
           <label>Phone </label>
           <Textbox />
           <Button />
        </div>
    )
}

export default Inputs;