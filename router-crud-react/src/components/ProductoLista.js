import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductoLista = ({ producto, setRefresh }) => {
	const eliminarProducto = (id) => {
		Swal.fire({
			title: 'Estas seguro de eliminar este producto?',
			text: 'No se podra revertir esto',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Eliminar',
			cancelButtonText: 'Cancelar'
		}).then(async (result) => {
			if (result.value) {
				const resultado = await axios.delete(
					`http://localhost:3001/restaurant/${id}`
				);
				console.log(resultado);
				if (resultado.status === 200) {
					setRefresh(true);
					Swal.fire(
						'Producto editado',
						'El producto se edito correctamente',
						'success'
					);
				}

				Swal.fire(
					'Eliminado!',
					'Tu platillo ha sido eliminado',
					'success'
				);
			}
		});
	};
	return (
		<li
			data-categoria={producto.categoria}
			className="list-group-item d-flex justify-content-between"
		>
			<p>
				{producto.nombrePlatillo}
				<span className="font-weight-bold"> ${producto.precio}</span>
			</p>
			<div>
				<Link
					to={`/productos/editar/${producto.id}`}
					className="btn btn-success mr-2"
				>
					Editar
				</Link>
				<button
					className="btn btn-danger"
					onClick={() => eliminarProducto(producto.id)}
				>
					Eliminar
				</button>
			</div>
		</li>
	);
};

export default ProductoLista;
