import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <a class="navbar-brand text-white" href="#">PabloGM</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link text-white" href="#">Home<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Perfil</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled text-white">Portafolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled text-white">Contactos</a>
                </li>
              </ul>
              
            </div>
          </nav>
         
        );

        
    }
    
}
 
export default Navbar;