import React, { useState } from 'react';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setPreguntaPresupuesto, setRestante }) => {
	const [ cantidad, setCantidad ] = useState(0);
	const [ error, setError ] = useState(false);
	const agregarPresupuesto = (e) => {
		e.preventDefault();
		if (cantidad <= 0 || isNaN(cantidad)) {
			setError(true);
			return;
		}
		setError(false);
		setPresupuesto(cantidad);
		setRestante(cantidad);
		setPreguntaPresupuesto(false);
	};
	return (
		<div>
			<h2>Coloca tu presupuesto</h2>
			{error && <Error mensaje="El presupuesto es incorrecto" />}
			<form onSubmit={agregarPresupuesto}>
				<input
					type="number"
					className="u-full-width"
					placeholder="Agrega tu presupuesto"
					name="presupuesto"
					onChange={(e) => setCantidad(parseFloat(e.target.value))}
				/>
				<input
					type="submit"
					className="button-primary u-full-width"
					value="Definir presupuesto"
				/>
			</form>
		</div>
	);
};

export default Pregunta;
