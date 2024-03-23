// src/components/admin/AdminProductList.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminProductItem from "./AdminProductItem";
import AdminProductForm from "./AdminProductForm";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  nom: string;
  prix: number;
  description: string;
  image: string;
}

const AdminProductList: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:3333/Products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
      }
    };

    fetchProducts();
  }, []);


  const handleDeleteProduct = (productId: number) => {
    // Ajouter votre logique de suppression ici
    // Utilisez axios ou toute autre bibliothèque pour effectuer la demande DELETE à votre API
    axios
      .delete(`http://localhost:3333/Products/${productId}`)
      .then((response) => {
        // Actualiser la liste des produits après la suppression réussie
        // Vous pouvez rappeler l'API pour récupérer la liste mise à jour ou mettre à jour votre état local
        // Exemple avec l'état local :
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du produit:", error);
      });
  };
const handleEditProduct = (productId: number) => {



  }

  return (
	<div className="container">
		<div className="row">
			<div className="admin-product-list">
				<h2><span>Liste des Produits</span> <span> <button
                className="btn btn-outline-primary my-2 my-sm-0"
              >
                <Link className="nav-link" to="/admin/add-product">
                     Ajouter un produit
                </Link>
      </button></span></h2> 
				<div className="row">
					{products.map((product) => (
						<div className="col-md-4 mb-5">
							<AdminProductItem key={product.id} product={product} onEdit={handleEditProduct} onDelete={handleDeleteProduct}/>
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
  );
};

export default AdminProductList;
