import React, { Component } from 'react';
import './annonce-carte.css'

class AnnonceCard extends Component {
    render() { 
        return ( 
            <a href="/uneannonce">
            <div className="annonce ">
                <img className="annoncephoto" src={this.props.article.image} alt="annoncephoto" height="50%"/>
                <div className="bodyCard">
                    <h2>{this.props.article.name}</h2>
                    <h6>{this.props.article.place}</h6>
                    <h3>{this.props.article.price} DT</h3>
                </div>
            </div>
            </a>
         );
    }
}
 
export default AnnonceCard;