import React, { Component } from "react";
import './AForm.css';
import axios from 'axios';
import ImageList from "../ImageList/ImageList";
 
class AForm extends Component {

  constructor(props ){
    super(props);
    this.state = {entry:'',images:[]};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }


  
  // onInputChange(event) {
  //   this.setState({entry : event.target.value});
  //   console.log(event.target.value);
  // }

  onFormSubmit(event){
    event.preventDefault();
   // console.log(this.state.entry);
   this.onSearchSubmit(this.state.entry);
  }
  async onSearchSubmit(entry){
   // console.log(entry);
  const response = await axios.get(`https://pixabay.com/api/?key=34744977-c80c6c61675632ef33183d433&q=${entry}&image_type=photo`);
   console.log(response.data.hits);
   this.setState({images:response.data.hits});
  }
  render(){
 //   const buttonText ='hello there!';
      return (
      
        <div className="ui container" style={{marginTop:'30px'}}>
           
          <div className="ui segment">
            <form onSubmit={this.onFormSubmit}  className="ui form">
              <div className="field">
                <div className="ui massive icon input">
            
                  <input id="name" type="text" value={this.state.entry}  placeholder="Search .."
                   onChange={(event)=>this.setState({entry : event.target.value })} />
                  <i className="search icon"></i>
              </div>
              </div>
              </form>
             <ImageList images={this.state.images}/>
            </div>
            </div>
  );
  }
}

export default AForm;