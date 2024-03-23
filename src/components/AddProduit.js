import React, {useState } from "react";

function AddProduit({ handleAdd }) {
    const [nom, setNom] = useState('');
    const [prix, setPrix] = useState('');
    const [description, setDescription] = useState('');
    const placeholderName = "nom du produit";
    const placeholderPrix = "prix du produit";
    const placeholderDescription = "Description du produit";

    const handleChangeNom = (event) => {
        setNom(event.target.value);
      }

      const handleChangePrix = (event) => {
        setPrix(event.target.value);
      }

      const handleChangeDescription = (event) => {
        setDescription(event.target.value);
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        handleAdd(nom,prix,description);
        setNom('');
        setPrix('');
        setDescription('');
      }

  return (
     <div className="my_media_query">
      <form onSubmit={handleSubmit}>
        <div class="container"> 
          <h3 class="text-center" id="titre">Ajout d'un produit</h3>
          <div class="form-group row" >
                <div class="col-12" style={{margin:"10px"}}>
                <input
                      name="nom"
                       class="form-control"
                      placeholder={placeholderName}
                      value={nom}
                      type="text"
                      onChange={handleChangeNom}
              />
                </div>
          </div>
          <div class="form-group row" >
          <div class="col-12" style={{margin:"10px"}}>
              <input
                      name="Prix"
                      type="number"
                      class="form-control"
                      placeholder={placeholderPrix}
                      value={prix}
                      onChange={handleChangePrix}
              />
            </div>
           </div>
           <div class="form-group row" >
              <div class="col-12" style={{margin:"10px"}}>
                    <textarea
                            name="Description"
                            class="form-control"
                            type="text"
                            placeholder={placeholderDescription}
                            value={description}
                            onChange={handleChangeDescription}
                    />
                </div>
            </div>
            
                  <input type="submit" value="Ajouter" class="btn btn-primary d-block mx-auto text-center"/>
            
            
          </div>
         
        </form>
      </div>
  )
}

export default AddProduit