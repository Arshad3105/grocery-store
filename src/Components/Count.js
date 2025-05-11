import React,{useState} from "react";

const Count=()=> {
    const[Cnt,setCnt]= useState(0)

    const changeMessage=()=> {
        setCnt(Cnt+1);
    }
    const clear=()=>{
        setCnt(0);
    }

    return(
        <div>
            <h1>{Cnt}</h1>
            <input type="button" value="Click Here" onClick={changeMessage} />
            <input type="button" value="clear" onClick={clear} />
        </div>
    )
}
 
export default Count