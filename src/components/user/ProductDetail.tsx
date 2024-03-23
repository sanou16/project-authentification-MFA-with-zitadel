import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  nom: string;
  prix: number;
  description: string;
  image: string;
}

const UserProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get<Product>(`http://localhost:3333/Products/${productId}`)

		.then((res) => {

		  setProduct(res.data);
		})
		.catch((error) => {
			console.error("Erreur lors du chargement des détails du produit:", error);
		});

      } catch (error) {
        console.error("Erreur lors du chargement des détails du produit:", error);
      }
    };

    fetchProductDetails();
  },[]);

  if (!product) {
    return <p>Chargement des détails du produit...</p>;
  }

  return (
    <div className="card user-product-detail">
      <img src={product.image} className="card-img-top" alt={product.nom} />
      <div className="card-body">
        <h2 className="card-title">{product.nom}</h2>
        <p className="card-text">Prix: {product.prix} €</p>
        <p className="card-text">{product.description}</p>
        <Link to="/products" className="btn btn-primary">
          Retour à la liste des produits
        </Link>
      </div>
    </div>
  );
};

export default UserProductDetail;
