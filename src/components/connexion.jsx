import React, { Component } from 'react';
import './connexion.css'
import login from '../Images/Wavy_Tech-28_Single-10.png';

class Connexion extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="connexion ">
            <form name="connexion" method="POST" className="formulaire d-grid">
                <label htmlFor="name">Nom d'utilisateur</label>
                <input className="user" name="name" type="email"/>
                <label htmlFor="password">Mot de passe</label>
                <input className="passwd" name="password" type="password"/>
                <input type="submit" value="Connexion"/>
            </form>
            <img className="d-flex flex-end" src={login} alt="login" width="550px" height="auto"/>
            </div>
         );
    }
}
 
export default Connexion;