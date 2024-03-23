// src/components/admin/AdminProductDetail.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AdminStyle.css";

const AdminProductDetail = () => {
	const { ProductId } = useParams();
	const [Product, setProduct] = useState(null);
	const history = useNavigate;

	useEffect(() => {
		axios
			.get(`http://localhost:3333/Products/${ProductId}`)
			.then((response) => {
				setProduct(response.data);
			})
			.catch((error) => {
				console.error("Error loading Product details:", error);
				// Optionally: redirect to a not-found page or handle the error
				// history.push("/not-found");
			});
	}, [ProductId]);

	const handleEditClick = () => {
		// Redirect to the edit page for this Product
		history.push(`/admin/Products/${ProductId}/edit`);
	};

	const handleDeleteClick = () => {
		// Perform the delete action (you may want to show a confirmation modal)
		axios
			.delete(`http://localhost:3333/Products/${ProductId}`)
			.then(() => {
				console.log("Product deleted successfully");
				// Redirect to the Product list after deletion
				history.push("/admin/Products");
			})
			.catch((error) => {
				console.error("Error deleting Product:", error);
			});
	};

	if (!Product) {
		return <p>Loading Product details...</p>;
	}

	return (
		<div className="admin-Product-detail">
			<h2>Product Details (Admins)</h2>
			<div className="admin-Product-detail-info">
				<div className="admin-Product-detail-label">Nom:</div>
				<div className="admin-Product-detail-value">{Product.nom}</div>

				<div className="admin-Product-detail-label">Prénom:</div>
				<div className="admin-Product-detail-value">{Product.prenom}</div>

				<div className="admin-Product-detail-label">Classe:</div>
				<div className="admin-Product-detail-value">{Product.classe}</div>
			</div>

			<div className="admin-Product-buttons">
				<button className="admin-edit-button" onClick={handleEditClick}>
					Edit
				</button>
				<button className="admin-delete-button" onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default AdminProductDetail;
