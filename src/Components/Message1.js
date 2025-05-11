import React ,{useState} from "react";

const Message1=()=> {
    const [Msg,setMsg]= useState("Welcome")

    const changeMessage =() => 
        setMsg("Good Evening")
        
    return(
        <div>
        <h1>{Msg}</h1>
        <input type="button" value="Click Here" onClick={changeMessage} />
        </div>
        )
        }
           
export default Message1;