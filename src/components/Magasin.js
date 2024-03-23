import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Details from './Details';
import '../App.css';

function Magasin() {
  const [products, setProduits] = useState([]);
  const [product, setProduit] = useState([]);
  const [isLoading,setIsLoading] =   useState(true)
  const [error,setError] = useState(null);





  const [selectedProduit,setSelectedProduit] = useState(null);
  const [modifiedProduitName, setModifiedProduitName] =  useState('');
  const [modifiedProduitPrix, setModifiedProduitPrix] =  useState('');
  const [modifiedProduitDescription, setModifiedProduitDescription] =  useState('');



 


  const handleDelete=(id)=> {
    axios
      .delete('http://localhost:3333/produits/' + id)
      .then((res) =>
        setProduits((prevProduits) =>
          prevProduits.filter((produit) => produit.id !== id)
        )
      )
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }

  const handleModifier = (id,nom,prix,description) =>{
    setSelectedProduit(id);
    setModifiedProduitName(nom);
    setModifiedProduitPrix(prix);
    setModifiedProduitDescription(description);

  }

  const saveModifiedProduit = () => {
    axios
      .put(`http://localhost:3333/produits/${selectedProduit}`, {
        nom: modifiedProduitName,
        Prix: modifiedProduitPrix,
        Description:modifiedProduitDescription,
        
      })
      .then(() => {
        setProduits((prevProduits) =>
          prevProduits.map((produit) =>
            produit.id === selectedProduit
              ? { ...produit, nom: modifiedProduitName,Prix:modifiedProduitPrix, Description: modifiedProduitDescription }
              : produit
          )
        );
        setSelectedProduit(null);
        setModifiedProduitName('');
        setModifiedProduitPrix('');
        setModifiedProduitDescription('');
        
      })
      .catch((error) => setError(error));
  };

  const handleDetails=(id)=> {
    axios
      .get('http://localhost:3333/produits/' + id)
      .then((res) =>
        setProduit(res.data)
      )
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }


  useEffect((event) => {
  axios
    .get('http://localhost:3333/produits')
    .then((res) => {
      setProduits(res.data);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
      setIsLoading(false);
    });
}, [error]);

  return (  
  <div class="container" className="my_media_query " >
      <div class="row">
                <div class="col-12 text-center" style={{margin:"20px"}}>
                  <button class="btn btn-primary text-center" style={{margin:"5px"}}><a class="navbar-brand" href="/addProduit">Ajouter un produit</a></button>
                  <button class="btn btn-primary text-center"><a class="navbar-brand" href="/searchProduit">Rechercher un produit</a></button>     
                </div>
                
                <div class="col-12" id="main" className='my_media_query'>
                <h3 class="text-center">Liste des produits</h3>
              {isLoading ? (
                            <p>Loading...</p>
                          ): (
                            <div>
                        <table class="col-9 offset-2">
                              <thead>
                                <tr>
                                  <th>Nom</th>
                                  <th>Prix</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody >

                                {products.map((produit) =>(
                                  <tr key={produit.id} >
                                  <td> {produit.nom} </td>
                                  <td> {produit.Prix} FCFA</td>
                                  <td>
                                        <button  class="btn btn-primary" style={{margin:"2px"}} onClick={() => handleDetails(produit.id)} >Détails</button>    
                                        <button style={{margin:"2px"}}class="btn btn-danger btn-xs" onClick={() => handleDelete(produit.id)}>Supprimer</button>
                                        <button style={{margin:"2px"}} class="btn btn-warning btn-xs" onClick={() => handleModifier(produit.id,produit.nom,produit.Prix,produit.Description)}>Modifier</button>
                                  </td>                              
                                  </tr>
                                )) }
                              </tbody>
                        </table>        
                              
                            </div>
                            
                           
              )}
              </div>
      </div>
       <div class="container-fluid row">
       <div>
        {selectedProduit && (
           
              <div class="col-12">
                <div class="form-group row" >
                  <div class="col-12" style={{margin:"10px"}}>
                        <input
                        type="text"
                        class="form-control"
                        value={modifiedProduitName}
                        onChange={(e) => setModifiedProduitName(e.target.value)}
                      />
              
                  </div>
                </div>
                <div class="form-group row" >
                <div class="col-12" style={{margin:"10px"}}>
                    <input
                      type="number"
                      class="form-control"
                      value={modifiedProduitPrix}
                      onChange={(e) => setModifiedProduitPrix(e.target.value)}
                    />
                </div>
                </div>
                <div class="form-group row" >
                <div class="col-12" style={{margin:"10px"}}>
                  <input
                    type="text"
                    class="form-control"
                    value={modifiedProduitDescription}
                    onChange={(e) => setModifiedProduitDescription(e.target.value)}
                  />
                 </div>
                </div>
                <button  onClick={saveModifiedProduit} class="btn btn-info d-block mx-auto">Sauvegarder</button>
              </div>
      ) } 
        {
          (product.nom && product.id && product.Prix && product.Description && !selectedProduit) && (
              <div>
                   
                        {isLoading ? (
                                    <p>Loading...</p>
                                  ) : (

                                      <Details
                                        key={product.id}
                                        product={product}
                                      />              
                                      )} 
              </div>
              
            )
        }
        
        </div>
    </div>
      

  </div>
    
  )
}

export default Magasin


