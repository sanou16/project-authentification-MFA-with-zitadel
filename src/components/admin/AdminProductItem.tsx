// src/components/admin/AdminProductItem.tsx

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
interface Product {
	id: number;
	nom: string;
	prix: number;
	description: string;
	image: string;
}

const AdminProductItem: React.FC<{ product: Product, onDelete: (productId: number) => void, onEdit :
	(productId: number) => void
 }> = ({ product , onDelete }) => {


	return (
<div className="card admin-product-item mb-3">
      <img
        src={product.image}
        className="card-img-top"
        alt={`Image for ${product.nom}`}
      />
      <div className="card-body">
        <h5 className="card-title">{product.nom}</h5>

        <p className="card-text">Prix: {product.prix} €</p>
        <div className="d-flex justify-content-between">
          <Link to={`/admin/products/${product.id}`} className="btn btn-primary">
            Modifier
          </Link>
          <button className="btn btn-danger"
		  onClick={() => onDelete(product.id)}
		  >Supprimer</button>
        </div>
      </div>
    </div>
	);
};

export default AdminProductItem;
