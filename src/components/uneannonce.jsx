import React, { Component } from 'react';
import photo from "../Images/Annonce.jpg"
import photo2 from "../Images/Profile-pic.jpg"
import photo3 from "../Images/Speaker.png"
import "./uneannonce.css"

class Uneannonce extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div className="d-flex">
                <div class="photos">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src= {photo} class="d-block w-100" alt="te"/>
                        </div>
                        <div class="carousel-item">
                        <img src= {photo3} class="d-block w-100" alt="te"/>
                        </div>
                        <div class="carousel-item">
                        <img src= {photo2} class="d-block w-100" alt="te"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
                </div>
                <div className="annonceBody">
                    <h1>Nom de l'article</h1>
                    <h3>
                        Eu non reprehenderit commodo eiusmod excepteur velit aliquip nisi.
                        Sit dolore reprehenderit esse reprehenderit ipsum duis veniam exercitation. 
                        Irure laborum est laboris ex aute est. Reprehenderit dolore consequat consequat 
                        laboris exercitation quis tempor sint.
                    </h3>
                    <h4>Place</h4>
                    <h2>350 DT</h2>
                    <button className="btn btn-primary"> Contacter </button>
                </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Uneannonce;