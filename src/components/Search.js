 import React from 'react'
import produits from '../data/produits.json'
import { useState } from 'react';
//import style from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const results = produits.produits.filter((produit) =>
          produit.nom.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      };
      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
  return (
    <div class=" container row " className="my_media_query">
        <h2 class="text-center" className="my_media_query" id="titre">Recherche d'un produit</h2>
        <div class="col-12">
                  <input
                    name="nom"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Rechercher un produit"
                    class="form-control" 
                    onKeyUp={handleSearchSubmit} 
                  />
        </div>
        <div>
        <div>
                  <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                          </tr>
                        </thead>
                        <tbody >
                          {searchResults.map((produit) =>(
                            <tr key={produit.id} >
                                <td> {produit.nom} </td>
                                <td> {produit.Prix} FCFA</td>                           
                            </tr>
                          )) }
                        </tbody>
                  </table>        
                        
                      </div>
        </div>
    </div>
  )
}

export default Search