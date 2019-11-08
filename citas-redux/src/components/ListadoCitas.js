import React from 'react';
import { useSelector } from 'react-redux';
import Cita from './Cita';
const ListadoCitas = () => {
	const { citas } = useSelector((state) => state.citas);
	console.log(citas);
	return (
		<div className="card mt-5">
			<div className="card-body">
				<h2 className="card-title text-center">
					Administra las citas aqui
				</h2>
				<div className="lista-citas">
					{citas.map((cita) => <Cita key={cita.id} cita={cita} />)}
				</div>
			</div>
		</div>
	);
};

export default ListadoCitas;
