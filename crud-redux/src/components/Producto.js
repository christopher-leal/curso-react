import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/productosActions';
import Swal from 'sweetalert2';
const Producto = ({ producto }) => {
	const dispatch = useDispatch();

	const eliminarProducto = (id) => dispatch(borrarProductoAction(id));
	const borrarProducto = (id) => {
		// confirmacion de sweetalert
		Swal.fire({
			title: '¿Estas seguro que deseas eliminar este producto?',
			text: 'No se podra recuperar una vez eliminado',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, borralo!'
		}).then((result) => {
			if (result.value) {
				eliminarProducto(id);
				Swal.fire(
					'Borrado!',
					'El producto ha sido eliminado.',
					'success'
				);
			}
		});
	};

	return (
		<tr>
			<td>{producto.nombre}</td>

			<td>
				<span className="font-weight-bold">${producto.precio}</span>
			</td>
			<td className="acciones">
				<Link
					to={`/productos/editar/${producto.id}`}
					className="btn btn-primary mr-2"
				>
					Editar
				</Link>
				<button
					className="btn btn-danger"
					onClick={() => borrarProducto(producto.id)}
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
};

export default Producto;
