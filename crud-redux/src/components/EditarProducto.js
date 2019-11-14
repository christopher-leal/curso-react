import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	obtenerProductoEditarAction,
	editarProductoAction
} from '../actions/productosActions';
import Spinner from './Spinner';
import Error from './Error';
import {
	validarFormularioAction,
	validacionErrorAction,
	validacionExitoAction
} from '../actions/validacionActions';
import Swal from 'sweetalert2';
const EditarProducto = ({ match, history }) => {
	const { id } = match.params;
	const dispatch = useDispatch();

	const nombreRef = useRef('');
	const precioRef = useRef('');
	const productoEditar = (id) => dispatch(obtenerProductoEditarAction(id));
	useEffect(
		() => {
			productoEditar(id);
		},
		[ dispatch, id ]
	);
	const editarProducto = (producto) =>
		dispatch(editarProductoAction(producto));

	// valifacion de formulario
	const validarFormulario = () => dispatch(validarFormularioAction());
	const validarError = () => dispatch(validacionErrorAction());
	const validarExito = () => dispatch(validacionExitoAction());

	const submitEditarProducto = (e) => {
		validarFormulario();
		e.preventDefault();
		if (
			nombreRef.current.value.trim() === '' ||
			precioRef.current.value.trim() === ''
		) {
			validarError();
			return;
		}
		editarProducto({
			id,
			nombre: nombreRef.current.value,
			precio: precioRef.current.value
		});
		validarExito();
		Swal.fire(
			'Buen trabajo!',
			'Producto editado correctamente!',
			'success'
		);
		history.push('/');
	};
	const errorForm = useSelector((state) => state.error.error);
	const { producto, error } = useSelector((state) => state.productos);
	// cuando carga la api
	if (Object.keys(producto).length === 0) return <Spinner />;
	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center">Editar Producto</h2>
						{error && <Error mensaje="Hubo un error" />}
						{errorForm && (
							<Error mensaje="Todos los campos son obligatorios" />
						)}
						<form onSubmit={submitEditarProducto}>
							<div className="form-group">
								<label>Titulo</label>
								<input
									type="text"
									className="form-control"
									placeholder="Titulo"
									defaultValue={producto.nombre}
									ref={nombreRef}
								/>
							</div>
							<div className="form-group">
								<label>Precio del Producto</label>
								<input
									type="text"
									className="form-control"
									placeholder="Precio"
									defaultValue={producto.precio}
									ref={precioRef}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
							>
								Guardar Cambios
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditarProducto;
