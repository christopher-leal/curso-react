import React from 'react';

const Cancion = ({ letra }) => {
	if (letra.length === 0) return null;
	return (
		<div>
			<h2>Letra Cancion</h2>
			<p className="letra">{letra}</p>
		</div>
	);
};

export default Cancion;
