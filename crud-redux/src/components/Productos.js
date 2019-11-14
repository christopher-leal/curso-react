import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosActions';
import Spinner from './Spinner';
import Producto from './Producto';
import Error from './Error';

const Productos = () => {
	const dispatch = useDispatch();
	const { productos, loading, error } = useSelector(
		(state) => state.productos
	);

	useEffect(() => {
		const cargarProductos = () => dispatch(obtenerProductosAction());
		cargarProductos();
	}, []);
	return (
		<div>
			{error && <Error mensaje="Hubo un error" />}
			<div>
				<h2 className="text-center my-5">Listado de Productos</h2>
				<table className="table table-striped">
					<thead className="bg-primary table-dark">
						<tr>
							<th scope="col">Nombre</th>
							<th scope="col">Precio</th>
							<th scope="col">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{productos.map((producto) => (
							<Producto key={producto.id} producto={producto} />
						))}
					</tbody>
				</table>
				{loading && <Spinner />}
			</div>
		</div>
	);
};

export default Productos;
