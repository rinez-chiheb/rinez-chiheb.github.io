import React, { Component } from 'react';
import ProfilIco  from './ProfileIco';
import './Navbar.css';
import {Link} from "react-router-dom"

class NavBar extends Component {
    state={
        ConnUser : this.props.user.ConnUser
    }
    render() { 
        
        return (
        
        <React.Fragment>
            <nav className="navbar d-flex bd-highlight ">
                <Link to="/"><div className="me-auto p-2 bd-highlight">Brand logo</div></Link>
                <ProfilIco className="p-2 bd-highlight"user = {this.state.ConnUser}/> 
                <Link to="/ajouterannonce">
                <button className="btn ajoutannonce p-2 bd-highlight d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                        Ajouter une annonce
                </button>
                </Link>
            </nav>
        </React.Fragment>
        );
    }
}
 
export default NavBar;



