import React, { useState, useRef } from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

const EditarProducto = ({ producto, history, setRefresh }) => {
	// console.log(producto);
	const [ categoria, setCategoria ] = useState('');
	const [ error, setError ] = useState(false);

	const precio = useRef('');
	const nombrePlatillo = useRef('');
	const leerRadio = (e) => {
		setCategoria(e.target.value);
	};

	const editarProducto = async (e) => {
		e.preventDefault();
		let categoriaPlatillo =
			categoria === '' ? producto.categoria : categoria;
		const editarPlatillo = {
			nombrePlatillo: nombrePlatillo.current.value,
			precio: precio.current.value,
			categoria: categoriaPlatillo
		};
		if (
			nombrePlatillo.current.value === '' ||
			precio.current.value === '' ||
			categoriaPlatillo === ''
		) {
			setError(true);
			return;
		}
		setError(false);
		try {
			const resultado = await axios.put(
				`http://localhost:3001/restaurant/${producto.id}`,
				editarPlatillo
			);
			if (resultado.status === 200) {
				setRefresh(true);
				history.push('/productos');
				Swal.fire(
					'Producto editado',
					'El producto se edito correctamente',
					'success'
				);
			}
		} catch (e) {
			Swal.fire('Error', 'Hubo un error vuelve a intentarlo', 'error');
		}
	};
	return (
		<div className="col-md-8 mx-auto ">
			<h1 className="text-center">Editar Producto</h1>
			{error && <Error mensaje="Todos los campos son obligatorios" />}
			<form className="mt-5" onSubmit={editarProducto}>
				<div className="form-group">
					<label>Nombre Platillo</label>
					<input
						type="text"
						className="form-control"
						name="nombre"
						placeholder="Nombre Platillo"
						ref={nombrePlatillo}
						defaultValue={producto.nombrePlatillo}
					/>
				</div>

				<div className="form-group">
					<label>Precio Platillo</label>
					<input
						type="number"
						className="form-control"
						name="precio"
						placeholder="Precio Platillo"
						ref={precio}
						defaultValue={producto.precio}
					/>
				</div>

				<legend className="text-center">Categoría:</legend>
				<div className="text-center">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="categoria"
							value="postre"
							onChange={leerRadio}
							defaultChecked={producto.categoria === 'postre'}
						/>
						<label className="form-check-label">Postre</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="categoria"
							value="bebida"
							onChange={leerRadio}
							defaultChecked={producto.categoria === 'bebida'}
						/>
						<label className="form-check-label">Bebida</label>
					</div>

					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="categoria"
							value="cortes"
							onChange={leerRadio}
							defaultChecked={producto.categoria === 'cortes'}
						/>
						<label className="form-check-label">Cortes</label>
					</div>

					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="categoria"
							value="ensalada"
							onChange={leerRadio}
							defaultChecked={producto.categoria === 'ensalada'}
						/>
						<label className="form-check-label">Ensalada</label>
					</div>
				</div>

				<input
					type="submit"
					className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
					value="Editar Producto"
				/>
			</form>
		</div>
	);
};

export default withRouter(EditarProducto);
