import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ()=>{
    return(<nav className="ui raised very padded segment">
        <div className="ui right floated header">


     <button className="ui button"><NavLink to="/">Hemisphere</NavLink></button>
     <button className="ui button"><NavLink to="/image-list">ImageList</NavLink></button>
     <button className="ui button"><NavLink to="/comments">Comments</NavLink></button>
     <button className="ui button"><NavLink to="/about">About</NavLink></button>
     <button className="ui button"><NavLink to="/contact">Contact</NavLink></button>

            </div>

    </nav>)
}

export default NavBar;

/***
 *             <a href="/" className="ui teal inverted segment">Hemisphere</a>
            <a href="/image-list" className="ui teal inverted segment">ImageList</a>
            <a href="/comments" className="ui teal inverted segment">Comments</a>
 */