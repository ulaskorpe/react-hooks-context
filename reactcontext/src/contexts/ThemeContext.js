import React,{Component, createContext} from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component
{
    state = {
        isDarkTheme : true,

        lightTheme : {
            text : '#111111',
            background : '#d8ddf1'
        },
        darkTheme : {
            text : '#ffffff',
            background : '#5c5c5c'
        }
    };
        changeTheme = ()=>{
         //   console.log(this.state.isDarkTheme);
            this.setState({isDarkTheme : !this.state.isDarkTheme});
        }
    render(){
        return(
           <ThemeContext.Provider value={{...this.state, changeTheme:this.changeTheme}}>
                { this.props.children }
           </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;