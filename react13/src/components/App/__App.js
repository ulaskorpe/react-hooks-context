import React, { Component } from "react";
 import Hemisphere from "../Hemisphere/Hemisphere";

class App extends Component
{

    constructor(props){
        super(props); 
     //state burada this.state ile tanımlanabilir
  
    }

    state = {
        latitude :  null,
        longitude : null,
        errorMessage : ''
    }

    componentDidMount(){
        console.log("mount")
        window.navigator.geolocation.getCurrentPosition(
            //  (position)=>console.log(position),
             (position)=>{
                  this.setState({latitude:position.coords.latitude,longitude :position.coords.longitude})
             },
              (error)=>this.setState({errorMessage: error.message})//console.log(error)
                   
              );
    }
    componentDidUpdate(){
        console.log("updated");
    }


    render(){

    if(this.state.errorMessage && !this.state.latitude){
    return(<div>
    {this.state.errorMessage}
    </div>)
    }
    if(!this.state.errorMessage && this.state.latitude){
        return(<div>
            
       <Hemisphere latitude={this.state.latitude} longitude={this.state.longitude} />
    
        </div>)
        }else{
            
        return(<div>
            Loading ...
        </div>)
        }            

    }
}

// const App = ()=>{

//     window.navigator.geolocation.getCurrentPosition(
//             (position)=>console.log(position),
//             (error)=>console.log(error)

//     );

//     return(<div>latitude:</div>);
// }

export default App;