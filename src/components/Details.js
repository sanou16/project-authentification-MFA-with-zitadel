import React from 'react'

function Details(props) {
    const {product} = props;
  return (
    <div>
      {
         (product.nom && product.id && product.Prix && product.Description) ? (

          <div>
                <h3 class="text-center">Détails du produit {product.nom}</h3>
                <ul>
                    <li class="list-unstyled "><p class="font-weight-bold"> Identifiant: {product.id}</p></li>
                    <li class="list-unstyled font-weight-bold"><p class="font-weight-bold">Nom: {product.nom}</p></li>
                    <li class="list-unstyled font-weight-bold"><p class="font-weight-bold">Prix: {product.Prix} FCFA</p></li>
                    <li class="list-unstyled font-weight-bold"><p class="font-weight-bold">Description: {product.Description}</p></li>
                </ul>
          </div>
           
         ):(
              
          <p></p>

         )

      }
     
      
    </div>
  )
}

export default Details