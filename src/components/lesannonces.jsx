import React, { Component } from 'react';
import AnnonceCard from './annonce-carte';
import Photo from "../Images/Annonce.jpg";
import "./lesannonces.css";

class LesAnnonces extends Component {
    state = { 
        articles:[
            { 
                image:Photo,
                name:"nom de l'article",
                price:"88",
                place:"Nouveau place",
                categories:"Entreprises"
            },
            {
                image:Photo,
                name:"nom de l'article2",
                price:"305",
                place:"Nouveau place",
                categories:"Entreprises"
            },
            {
                image:Photo,
                name:"nom de l'article33",
                price:"99",
                place:"Nouveau place",
                categories:"Entreprises"
            },
            {
                image:Photo,
                name:"nom de l'article33",
                price:"99",
                place:"Nouveau place",
                categories:"Immobilier"
            }]
    }
    render() { 
        return (
            <React.Fragment>
            <div className="container">
                <div className="filtre">
                    <select name="Gouvernorat" >
                        <option value="" selected disabled>Choisir un gouvernorat</option>
                        <option value="Ariana">Ariana</option>
                        <option value="Béja">Béja</option>
                        <option value="Ben Arous">Ben Arous</option>
                        <option value="Bizerte">Bizerte</option>
                        <option value="Gabès">Gabès</option>
                        <option value="Gafsa">Gafsa</option>
                        <option value="Jendouba">Jendouba</option>
                        <option value="Kairouan">Kairouan</option>
                        <option value="Kasserine">Kasserine</option>
                        <option value="Kébili">Kébili</option>
                        <option value="Le Kef">Le Kef</option>
                        <option value="Mahdia">Mahdia</option>
                        <option value="La Manouba">La Manouba</option>
                        <option value="Médenine">Médenine</option>
                        <option value="Monastir">Monastir</option>
                        <option value="Nabeul">Nabeul</option>
                        <option value="Sfax">Sfax</option>
                        <option value="Sidi Bouzid">Sidi Bouzid</option>
                        <option value="Siliana">Siliana</option>
                        <option value="Sousse">Sousse</option>
                        <option value="Tataouine">Tataouine</option>
                        <option value="Tozeur">Tozeur</option>
                        <option value="Tunis">Tunis</option>
                        <option value="Zaghouan">Zaghouan</option>
                    </select>
                    <select name="Catégorie" ><br/>
                        <option value="" selected disabled >Choisir une catégorie</option>
                        <option value="Maison et Meubles">Maison et Meuble</option>
                        <option value="Voiture et Motos">Voiture et Motos</option>
                        <option value="Multimédia et TV">Multimédia et TV</option>
                        <option value="Immobilier">Immobilier</option>
                        <option value="Entreprises">Entreprises</option>
                        <option value="Loisirs et Divertissement ">Loisirs et Divertissement </option>
                        <option value="Services et Emploi">Services et Emploi </option>
                        <option value="Autres">Autres</option>
                    </select>
                </div>
                <div className="d-flex">
                    {this.state.articles.map(article => (<AnnonceCard article={article}/>))}
                </div>
            </div>
            </React.Fragment>
            
            );
    }
}

export default LesAnnonces;