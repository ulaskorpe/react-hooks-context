import React from "react";
import { BrowserRouter  , Route, Switch } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import Comments from "../Comments/Comments";
import AForm from "../AForm/AForm";
import Hemisphere from "../Hemisphere/Hemisphere";
import About from "../About/About";
import Contact from "../Contact/Contact";
function Home(){
        return(
            
            <BrowserRouter>
                <div>
                <NavBar/>
            <Switch>
            <Route path="/" exact component={ Hemisphere }  />
            <Route path="/image-list" component={AForm} />
            <Route path="/comments" component={Comments} />
            <Route path="/about/:user_name?" component={About} />
            <Route path="/contact" component={Contact} />
            </Switch>
            </div>
          </BrowserRouter>

        );
}

export default Home;