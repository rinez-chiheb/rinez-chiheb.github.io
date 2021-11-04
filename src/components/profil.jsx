import React, { Component } from 'react';
import LesAnnonces from './lesannonces';

class Profil extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="mesannonce">
                <LesAnnonces/>
            </div>
            <div className="infos">

            </div>
            </>
         );
    }
}
 
export default Profil; 