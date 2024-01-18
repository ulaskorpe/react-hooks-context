import React, { Component,useState } from "react";
import Modal from "../Modal/Modal";
//import { Link, useParams,withRouter } from 'react-router-dom';
 

// const About =( )=>{
    
//     const { user_name } = useParams();
//     const user = (user_name) ? user_name : 'US';
//     //console.log(props);
//     setTimeout(() => {
//     //  props.history.push('/comments');
//    // window.open('/comments','_self');
//     }, 2000);
//     return(<div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
//         <h3 className="ui header">ABOUT {user}</h3>
//         <p>NavLinkNavLinkNavLinkNavLinkNavLinkNavLink</p>
//     </div>);
// }


class About extends Component
{
  
    state = {
        user_name : 'US'
    }
    componentDidMount(){
        const { match } = this.props;
        const { params } = match;
        console.log('Route Params:', params);
        if(params.user_name){
            this.setState({user_name : params.user_name})
        }
    }

    
    render(){
 
        
         return(
        <div>
           
            
        <div className="ui raised very padded text container segment" style={{marginTop:'80px'}}>
                 <h3 className="ui header">ABOUT {this.state.user_name} </h3>
                 <p>NavLinkNavLinkNavLinkNavLinkNavLinkNavLink</p>
             </div>
             </div>
             );
    }
}

export default About;