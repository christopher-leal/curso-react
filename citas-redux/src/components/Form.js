import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarCitaAction } from '../actions/citasActions';
import uuid from 'uuid/v4';
import validarFormularioAction from '../actions/validacionActions';
import Error from './Error';

const Form = () => {
	const [ mascota, setMascota ] = useState('');
	const [ propietario, setPropietario ] = useState('');
	const [ fecha, setFecha ] = useState('');
	const [ hora, setHora ] = useState('');
	const [ sintomas, setSintomas ] = useState('');

	// dispasth para ejecutar nuestras acciones
	const dispatch = useDispatch();
	const agregarNuevaCita = (cita) => dispatch(agregarCitaAction(cita));
	const validarForm = (state) => dispatch(validarFormularioAction(state));

	// use selector = mapstateToProps en hooks
	const error = useSelector((state) => state.error);

	const submitCita = (e) => {
		e.preventDefault();
		// validar el form
		if (
			mascota.trim() === '' ||
			propietario.trim() === '' ||
			fecha.trim() === '' ||
			hora.trim() === '' ||
			sintomas.trim() === ''
		) {
			validarForm(true);
			return;
		}
		// crear la cita
		agregarNuevaCita({
			id: uuid(),
			mascota,
			propietario,
			fecha,
			hora,
			sintomas
		});
		validarForm(false);

		// reiniciar form
		setMascota('');
		setPropietario('');
		setFecha('');
		setHora('');
		setSintomas('');
	};

	return (
		<div className="card mt-5">
			<div className="card-body">
				<h2 className="card-title text-center mb-5">
					Agrega las citas aqui
				</h2>
				{error.error && (
					<Error mensaje="Todos los campos son obligatorios" />
				)}

				<form onSubmit={submitCita}>
					<div className="form-group row">
						<label className="col-sm-4 col-lg-2 col-form-label">
							Nombre Mascota
						</label>
						<div className="col-sm-8 col-lg-10">
							<input
								type="text"
								className="form-control"
								placeholder="Nombre Mascota"
								value={mascota}
								onChange={(e) => setMascota(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-4 col-lg-2 col-form-label">
							Nombre Dueño
						</label>
						<div className="col-sm-8 col-lg-10">
							<input
								type="text"
								className="form-control"
								placeholder="Nombre Dueño de la Mascota"
								value={propietario}
								onChange={(e) => setPropietario(e.target.value)}
							/>
						</div>
					</div>

					<div className="form-group row">
						<label className="col-sm-4 col-lg-2 col-form-label">
							Fecha
						</label>
						<div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
							<input
								type="date"
								className="form-control"
								value={fecha}
								onChange={(e) => setFecha(e.target.value)}
							/>
						</div>

						<label className="col-sm-4 col-lg-2 col-form-label">
							Hora
						</label>
						<div className="col-sm-8 col-lg-4">
							<input
								type="time"
								className="form-control"
								value={hora}
								onChange={(e) => setHora(e.target.value)}
							/>
						</div>
					</div>

					<div className="form-group row">
						<label className="col-sm-4 col-lg-2 col-form-label">
							Sintomas
						</label>
						<div className="col-sm-8 col-lg-10">
							<textarea
								className="form-control"
								value={sintomas}
								onChange={(e) => setSintomas(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-group row justify-content-end">
						<div className="col-sm-3">
							<button
								type="submit"
								className="btn btn-success w-100"
							>
								Agregar
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
