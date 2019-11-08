import React, { useState } from 'react';

const Formulario = ({ datosConsulta }) => {
	// busqueda = state, guardarBusqueda =  this.setstate({})
	const [ busqueda, guardarBusqueda ] = useState({
		ciudad: '',
		pais: ''
	});
	const handleChange = (e) => {
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value
		});
	};

	const consultarClima = (e) => {
		e.preventDefault();
		datosConsulta(busqueda);
	};
	return (
		<div>
			<form onSubmit={consultarClima}>
				<div className="input-field col s12">
					<input
						type="text"
						name="ciudad"
						id="ciudad"
						onChange={handleChange}
					/>
					<label htmlFor="ciudad">Ciudad:</label>
				</div>
				<div className="input-field col s12">
					<select name="pais" onChange={handleChange}>
						<option value="">Selecciona un pais</option>
						<option value="US">Estados Unidos</option>
						<option value="MX">Mexico</option>
						<option value="AR">Argentina</option>
						<option value="CO">Colombia</option>
						<option value="CR">Costa Rica</option>
						<option value="ES">España</option>
						<option value="PE">Peru</option>
					</select>
					<label htmlFor="pais">Pais:</label>
				</div>
				<div className="input-field col s12">
					<button
						type="submit"
						className="waves-effect waves-light btn-large  yellow accent-4"
					>
						Buscar clima
					</button>
				</div>
			</form>
		</div>
	);
};

export default Formulario;
