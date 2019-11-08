import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({ setGasto, setCrearGasto }) => {
	const [ nombreGasto, setNombreGasto ] = useState('');
	const [ cantidadGasto, setCantidadGasto ] = useState('');
	const [ error, setError ] = useState(false);

	const agregarGasto = (e) => {
		e.preventDefault();
		if (isNaN(cantidadGasto) || cantidadGasto <= 0 || nombreGasto === '') {
			setError(true);
			return;
		}
		// pasar gasto al componente app
		setGasto({
			cantidadGasto,
			nombreGasto,
			id: shortid.generate()
		});
		setCrearGasto(true);
		// eliminar alerta
		setError(false);

		// reiniciar form
		setCantidadGasto('');
		setNombreGasto('');
	};
	return (
		<div>
			<form onSubmit={agregarGasto}>
				<h2>Agrega tus gastos aqui</h2>
				{error && <Error mensaje="Ambos campos son obligatorios" />}
				<div className="campo">
					<label htmlFor="">Nombre gasto</label>
					<input
						type="text"
						className="u-full-width"
						placeholder="Ej. Transporte"
						onChange={(e) => setNombreGasto(e.target.value)}
						value={nombreGasto}
					/>
				</div>
				<div className="campo">
					<label htmlFor="">Cantidad gasto</label>
					<input
						type="text"
						className="u-full-width"
						placeholder="Ej. 300"
						onChange={(e) =>
							setCantidadGasto(parseFloat(e.target.value))}
						value={cantidadGasto}
					/>
				</div>
				<input
					type="submit"
					className="button-primary u-full-width"
					value="Agregar gasto"
				/>
			</form>
		</div>
	);
};

export default Formulario;
