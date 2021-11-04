import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Slider from "./Slider";
import AjouterAnnonce from "./Ajouter-annonce";
import Connexion from './connexion';
//import AnnonceCard from "./annonce-carte";
//import image from '../Images/Annonce.jpg';
import LesAnnonces from "./lesannonces";
import Uneannonce from "./uneannonce";



const ReactUserSetup = (ConnUser) => {
    
    return(
        
        <Router>
                <NavBar user={ConnUser}/>
                <Route exact path='/'>
                    <Slider/>
                </Route>
                <Route path='/ajouterannonce'>
                    <AjouterAnnonce user = {ConnUser} />
                </Route>
                <Route path='/connexion'>
                    <Connexion />
                </Route>
                <Route path="/lesannonces">
                    <LesAnnonces/>
                </Route>
                <Route path="/uneannonce">
                    <Uneannonce/>
                </Route>
        </Router>
            
    )
}

export default ReactUserSetup ;
