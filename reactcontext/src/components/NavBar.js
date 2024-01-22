import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
class NavBar extends Component 
{
  //  static contextType = ThemeContext;


    render(){
       //console.log(this.context);
        //const {isDarkTheme,darkTheme,lightTheme} = this.context;
        //const theme =  isDarkTheme ? darkTheme: lightTheme;
        return(
<AuthContext.Consumer>{(authContext)=>(
            <ThemeContext.Consumer >{(themeContext)=>{
                const {isDarkTheme,darkTheme,lightTheme} = themeContext;
                const theme =  isDarkTheme ? darkTheme: lightTheme;
                const {isLoggedIn,changeAuthStatus} = authContext;
                return(
                    <nav style={{background:theme.background  , height:'120px'}}>

                    <h2 className="ui centered header" style={{textAlign:"center",color :theme.text}} >SMT SERIOUS</h2>
                    <p style={{textAlign:"center"}} onClick={changeAuthStatus}>{isLoggedIn ? "YES":"NO"}</p>
                    <div className="ui three buttons">
                    
                        <button className="ui button">Overview</button>
                        <button className="ui button">Contact</button>
                        <button className="ui button">Support</button>
    
                    </div>
                        </nav>
                )
            }}</ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
);
    }
}

export default NavBar;