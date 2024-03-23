// src/components/user/UserProductList.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserProductItem from "./ProductItem";
import "./UserStyle.css";

interface Product {
	id: number;
	nom: string;
	prix: number;
	description: string;
	image: string;
}

const UserProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3333/Products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des étudiants:", error);
      });
  }, []);

  return (
	<div className="container"><div className="row">
    <div className="user-product-list">
      <h2>Liste des produits</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-5">
            <UserProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
	</div></div>
  );
};

export default UserProductList;
