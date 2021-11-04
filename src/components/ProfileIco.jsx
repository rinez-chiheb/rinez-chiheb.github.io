
import React, { Component } from 'react';
import Profilpic from '../Images/Profile-pic.jpg';
import './ProfilIco.css';
import {Link} from 'react-router-dom'

class ProfilIco extends Component {
    render() { 
        console.log('user connected = ' , this.props.user )
        if (this.props.user === true) {
            return ( 
            <React.Fragment> 
                <div className="profil p-2 bd-highlight">
                Foulen Ben Foulen
                <img className="pdp" src={ Profilpic } alt="profil-pic" width="50px" height="50px"/>
                </div> 
            </React.Fragment>
            );}
        else{
            return[
                <Link to='/connexion'>
                    <button className="btn connexion d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg> 
                <p>Connexion</p>
                </button>
                </Link>
            ]

        }
    }
}
 
export default ProfilIco;

