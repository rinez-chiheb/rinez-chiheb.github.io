import React, { Component } from 'react';
import "./Ajouter-annonce.css"
import Connexion from './connexion';


class AjouterAnnonce extends Component {
    
    render() { 
        if (this.props.user.ConnUser ===true){
            return (
            <form name='ajouterannonce'className=" formulaire container" method='POST'>
                <legend>Ajouter une annonce</legend>
                <label htmlFor="article">Le nom d'article:</label><br/>
                <input type="text" name="article" placeholder="Nom d'article" required /><br/>
                <label htmlFor="description">Description de l'article</label><br/>
                <textarea type="text" name="description" rows="6" placeholder="Décrir l'article" required/><br/>
                <label for="Gouvernorat">Choisir un gouvernorat:</label><br/>
                <select name="Gouvernorat"  required><br/>
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
                </select><br/>
                <label for="Catégorie">Choisir une catégorie:</label><br/>
                <select name="Catégorie" required ><br/>
                    <option value="" selected disabled >Choisir une catégorie</option>
                    <option value="Maison et Meubles">Maison et Meuble</option>
                    <option value="Voiture et Motos">Voiture et Motos</option>
                    <option value="Multimédia et TV">Multimédia et TV</option>
                    <option value="Immobilier">Immobilier</option>
                    <option value="Entreprises">Entreprises</option>
                    <option value="Loisirs et Divertissement ">Loisirs et Divertissement </option>
                    <option value="Services et Emploi">Services et Emploi </option>
                    <option value="Autres">Autres</option>
                </select><br/>
                <label htmlFor="photos">Sélectionner de photos</label><br/>
                <input name="photos"type="file" accept="image/*" multiple required/><br/>
                <label htmlFor="price">Prix (en DT)</label><br/>
                <input type="number" min="0.00" max="1000000" step="10" /><br/>
                <button className="btn ajouter" type="submit"> Ajouter votre article </button>
            </form>
        );
        }else{
            return( <Connexion/>);
        }
    
    }
}

 
export default AjouterAnnonce;

  
