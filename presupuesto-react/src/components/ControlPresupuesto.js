import React from 'react';
import { revisarPresupuesto } from '../helpers/helper';

const ControlPresupuesto = ({ presupuesto, restante }) => {
	const clase = revisarPresupuesto(presupuesto, restante);
	return (
		<div>
			<div className="alert alert-primary">
				Presupuesto: ${presupuesto}
			</div>
			<div className={clase}>Restante: ${restante}</div>
		</div>
	);
};

export default ControlPresupuesto;
