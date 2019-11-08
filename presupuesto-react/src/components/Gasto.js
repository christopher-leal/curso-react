import React from 'react';

const Gasto = ({ gasto, eliminarGasto }) => {
	return (
		<li>
			<p>
				{gasto.nombreGasto}
				<span className="gasto">${gasto.cantidadGasto}</span>
				<button
					onClick={() => eliminarGasto(gasto.id)}
					className="button-danger"
				>
					Eliminar
				</button>
			</p>
		</li>
	);
};

export default Gasto;
