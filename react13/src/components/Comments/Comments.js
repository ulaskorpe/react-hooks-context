import React, { Component } from "react";
import SingleComment from "../SingleComment/SingleComment";
import profile_img from '../images/profile.jpg'
 import UserCard from "../UserCard/UserCard";
 
class Comments extends Component
{

    
    render(){
        return(<div className="ui comments">
              
            <UserCard>THIS IS THE WAY</UserCard>
            <UserCard>
            <SingleComment name="ULAŞ" date='15.33' comment='this is the way' photo={profile_img}/>
            </UserCard>
            <UserCard>
            <SingleComment name='KÖRPE' date='12.31' comment='great job' photo={profile_img}/>
            </UserCard>
        </div>)
    }
}

export default Comments;