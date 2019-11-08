import React, { useState } from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

const AgregarProducto = ({ history, setRefresh }) => {
	const [ nombrePlatillo, setNombrePlatillo ] = useState('');
	const [ precio, setPrecio ] = useState('');
	const [ categoria, setCategoria ] = useState('');
	const [ error, setError ] = useState(false);

	const leerRadio = (e) => {
		setCategoria(e.target.value);
	};

	const agregarProducto = async (e) => {
		e.preventDefault();

		if (nombrePlatillo === '' || precio === '' || categoria === '') {
			setError(true);
			return;
		}
		setError(false);
		try {
			const resultado = await axios.post(
				'http://localhost:3001/restaurant',
				{
					nombrePlatillo,
					precio,
					categoria
				}
			);
			if (resultado.status === 201) {
				setRefresh(true);
				history.push('/productos');
				Swal.fire(
					'Producto creado',
					'El producto se creo correctamente',
					'success'
				);
			}
		} catch (e) {
			Swal.fire('Error', 'Hubo un error vuelve a intentarlo', 'error');
		}
	};
	return (
		<div className="col-md-8 mx-auto ">
			<h1 className="text-center">Agregar Nuevo Producto</h1>
			{error && <Error mensaje="Todos los campos son obligatorios" />}
			<form className="mt-5" onSubmit={agregarProducto}>
				<div className="form-group">
					<label>Nombre Platillo</label>
					<input
						type="text"
						className="form-control"
						name="nombre"
						placeholder="Nombre Platillo"
						onChange={(e) => setNombrePlatillo(e.target.value)}
					/>
				</div>

				<div className="form-group">
					<label>Precio Platillo</label>
					<input
						type="number"
						className="form-control"
						name="precio"
						placeholder="Precio Platillo"
						onChange={(e) => setPrecio(e.target.value)}
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
						/>
						<label className="form-check-label">Ensalada</label>
					</div>
				</div>

				<input
					type="submit"
					className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
					value="Agregar Producto"
				/>
			</form>
		</div>
	);
};

export default withRouter(AgregarProducto);
