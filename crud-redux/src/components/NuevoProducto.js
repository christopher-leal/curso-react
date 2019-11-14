import React, { useState } from 'react';

// redux
import { crearProductoAction } from '../actions/productosActions';
import { useDispatch, useSelector } from 'react-redux';
import {
	validarFormularioAction,
	validacionErrorAction,
	validacionExitoAction
} from '../actions/validacionActions';
import Error from './Error';
import Swal from 'sweetalert2';

const NuevoProducto = ({ history }) => {
	const [ nombre, setNombre ] = useState('');
	const [ precio, setPrecio ] = useState('');

	// obtener el state
	const { error } = useSelector((state) => state.error);

	// crear dispatch
	const dispatch = useDispatch();
	const agregarProducto = (producto) =>
		dispatch(crearProductoAction(producto));

	const validarFormulario = () => dispatch(validarFormularioAction());
	const validacionError = () => dispatch(validacionErrorAction());
	const validacionExito = () => dispatch(validacionExitoAction());
	const nuevoProducto = (e) => {
		e.preventDefault();
		validarFormulario();
		// validar el formulario
		if (nombre.trim() === '' || precio.trim() === '') {
			// mostrar un error
			validacionError();
			return;
		}
		validacionExito();
		agregarProducto({
			nombre,
			precio
		});
		Swal.fire(
			'Buen trabajo!',
			'Producto agregado correctamente!',
			'success'
		);

		// redireccionar
		history.push('/');
	};

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold ">
							Agregar Nuevo Libro
						</h2>
						{error && (
							<Error mensaje="Todos los campos son obligatorios" />
						)}
						<form onSubmit={nuevoProducto}>
							<div className="form-group">
								<label>Nombre Libro</label>
								<input
									type="text"
									className="form-control"
									placeholder="Nombre Libro"
									value={nombre}
									onChange={(e) => setNombre(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Precio Libro</label>
								<input
									type="text"
									className="form-control"
									placeholder="Precio Libro"
									value={precio}
									onChange={(e) => setPrecio(e.target.value)}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
							>
								Agregar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NuevoProducto;
