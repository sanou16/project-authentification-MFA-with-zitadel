// src/components/admin/AdminProductForm.tsx
import React, { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface Product {
  id?: number; // L'id est facultatif pour la création
  nom: string;
  prix: number;
  description: string;
  image: string;
}

const AdminProductFormEdit: React.FC = () => {
  const { productId } = useParams<{ productId?: string }>();
  const isEditing = !!productId; // Vérifie si productId est défini pour déterminer si c'est une modification
  const [product, setProduct] = useState<Product>({ nom: "", prix: 0, description: "", image: "" });
  const history = useNavigate();

  useEffect(() => {
    if (isEditing) {
      // Si c'est une modification, chargez les détails du produit existant
      axios.get<Product>(`http://localhost:3333/Products/${productId}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Erreur lors du chargement des détails du produit:", error);
        });
    }
  }, [isEditing, productId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSaveProduct = async () => {
    try {
      if (isEditing) {
        // Si c'est une modification, utilisez la méthode PUT pour mettre à jour le produit existant
        await axios.put(`http://localhost:3333/Products/${productId}`, product);
      } else {
        // Si c'est une création, utilisez la méthode POST pour créer un nouveau produit
        await axios.post("http://localhost:3333/Products", product);
      }

      // Redirigez vers la liste des produits après l'opération réussie
      history("/admin/products");
	//   push("/admin/products");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde du produit:", error);
    }
  };

  return (
    <div className="container">
      <h2>{isEditing ? "Modifier" : "Créer"} un produit</h2>
      <form>
        <div className="form-group mb-3">
          <label>Nom :</label>
          <input
            type="text"
            name="nom"
            className="form-control"
            value={product.nom}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Prix :</label>
          <input
            type="number"
            name="prix"
            className="form-control"
            value={product.prix}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label form="description">Description :</label>
          <textarea
            name="description"
            className="form-control"
            rows={5}
            cols={2}
            id="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label>Image URL :</label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={product.image}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-outline-primary text-center"
         onClick={handleSaveProduct}>
          {isEditing ? "Enregistrer les modifications" : "Créer le produit"}
        </button>
      </form>
    </div>
  );
};

export default AdminProductFormEdit;
