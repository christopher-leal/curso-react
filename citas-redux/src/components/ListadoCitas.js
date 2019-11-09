import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cita from './Cita';
import { borrarCitaAction } from '../actions/citasActions';

const ListadoCitas = () => {
	const { citas } = useSelector((state) => state.citas);

	const mensaje =
		Object.keys(citas).length === 0
			? 'No hay citas'
			: 'Administra las citas aqui';

	const dispatch = useDispatch();

	const borrarCita = (id) => dispatch(borrarCitaAction(id));
	return (
		<div className="card mt-5">
			<div className="card-body">
				<h2 className="card-title text-center">{mensaje}</h2>
				<div className="lista-citas">
					{citas.map((cita) => (
						<Cita
							key={cita.id}
							cita={cita}
							borrarCita={borrarCita}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ListadoCitas;
