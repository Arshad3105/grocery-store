
import React ,{useState} from "react";

function UserForm(){
    const[State, setState] = useState("");
   
    const setState1 = () => { 
        return
    (
    window.alert("Form Submitted Successfully")
    
    
      )
    }
    return (
        <div>
            <form >
                FirstName:<input type="text" name="fn" /> <br></br>
                LastName:<input type="text" name="ln" /> <br></br>
                email   :<input type="email" name="email"  />  <br></br>
                <input type="submit" value="Click Here" onSubmit={setState1} /> 
                <input type="reset" value="clear" />
        
            </form>
        </div>
    )
 

}


export default UserForm;
