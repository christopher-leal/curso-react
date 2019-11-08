import React from 'react';
import ProductoLista from './ProductoLista';

const Productos = ({ productos, setRefresh }) => {
	return (
		<div>
			<h1 className="text-center">Productos</h1>
			<ul className="list-group mt-5">
				{productos.map((producto) => (
					<ProductoLista
						key={producto.id}
						producto={producto}
						setRefresh={setRefresh}
					/>
				))}
			</ul>
		</div>
	);
};

export default Productos;
