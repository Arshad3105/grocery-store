import React,{Component} from "react";
class Message extends Component{
constructor(){
    super()
    this.state={ msg:"Good Morning"
    }
}
changeMessage(){
    this.setState({
        msg:"Welcome"
    })
}
render(){
    return(
    <div>
    <h1>{this.state.msg}</h1>
    <input type="button" value="Click Here" onClick={()=> this.changeMessage()  } />
    </div>
    );
}


}

export default Message;




