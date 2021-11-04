import React, { Component } from 'react';
import speaker from '../Images/Speaker.png'
import './Slider.css';
import {Link} from 'react-router-dom'

class Slider extends Component {
    render() { 
        return ( 
                <div className="slider">
                    <div className="description">
                        <h2>
                            Sint culpa cupidatat do qui nisi quis cupidatat fugiat dolor.
                            Ex ut consequat do nulla aliquip in dolor deserunt duis consectetur nisi.
                            Ullamco voluptate laboris ipsum sit pariatur duis.
                        </h2>
                        <Link to='/ajouterannonce'>
                            <button className="btn ajouter-annonce">
                                Ajouter Une annonce
                            </button>
                        </Link> 
                        <Link to="/lesannonces">
                        <button className="btn voir-annonce">
                            Voir les Annonces
                        </button>
                        </Link>
                    </div>
                    <img className="speaker" src={speaker} alt="speaker"/>
                </div>
         );
    }
}
 
export default Slider;