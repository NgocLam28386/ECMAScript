import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axios";

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		(async () => {
				const { data } = await api.get(`/products/${id}`);
				setProduct(data);
		})();
	}, []);
	return (
		<div className="row">
			<div className="col-6">
			<img src={product.thumbnail} alt="" />
			</div>
			<div className="col-4">
				<h2>{product.title}</h2>
				<p>{product.price}</p>
				<p>{product.description}</p>
				<button className="btn btn-danger"> Mua Ngay! </button>
			</div>
		</div>
	);
};

export default ProductDetail;