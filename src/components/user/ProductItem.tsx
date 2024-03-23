// src/components/user/UserProductItem.tsx
import React from "react";
import { Link } from "react-router-dom";

interface Product {
	id: number;
	nom: string;
	prix: number;
	description: string;
	image: string;
}

const UserProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (


    <div className="card user-product-item">
      <img
        src={product.image}
        className="card-img-top"
        alt={`Image for ${product.nom}`}
      />
	  <div className="card-body">
        <h5 className="card-title">{product.nom}</h5>

        <p className="card-text">
          Prix: {product.prix} €
        </p>
        <Link to={`/products/${product.id}`} className="btn btn-primary">
          Voir les détails
        </Link>
      </div>

	</div>
  );
};

export default UserProductItem;
