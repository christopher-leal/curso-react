import React, { useState } from 'react';
import Error from './Error';

const Buscador = ({ setBusqueda }) => {
	const [ terminoBusqueda, setTerminoBusqueda ] = useState('');
	const [ error, setError ] = useState(false);
	const buscarImagen = (e) => {
		e.preventDefault();
		if (terminoBusqueda === '') {
			setError(true);
			return;
		}
		setError(false);
		setBusqueda(terminoBusqueda);
	};
	return (
		<form onSubmit={buscarImagen}>
			<div className="row">
				<div className="form-group col-md-8">
					<input
						onChange={(e) => setTerminoBusqueda(e.target.value)}
						type="text"
						className="form-control form-control-lg"
						placeholder="Busca una imagen, ejemplo: Correr o Computadoras"
					/>
				</div>
				<div className="form-group col-md-4">
					<button
						type="submit"
						className="btn btn-lg btn-block btn-success"
					>
						Buscar
					</button>
				</div>
			</div>
			{error && <Error mensaje="Agrega un termino de busqueda" />}
		</form>
	);
};

export default Buscador;
