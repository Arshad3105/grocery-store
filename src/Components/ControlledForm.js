import React, {useState} from "react";

function ControlledForm() {


    const [value, setValue] = useState("");

    const handleChange = (event) => {
    setValue(event.target.value); 
    };
    
    const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted: " + value); 

    };
    return (

    <form onSubmit={handleSubmit}>
    Name: <input type="text" value={value} onChange={handleChange} />
    <button type="submit">Click Here</button>
    </form>

    );
   }

   export default ControlledForm;