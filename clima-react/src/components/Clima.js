import React from 'react';

const Clima = ({ resultado }) => {
	// extraer los valores
	const { name, main } = resultado;
	if (!name) return null;
	return (
		<div>
			<div className="card-panel white col s12">
				<div className="black-text">
					<h2>El clima de {name} es:</h2>
					<p className="temperatura">
						{parseInt(main.temp)} <span> &#x2103; </span>
					</p>
					<p>
						Temperatura maxima: {parseInt(main.temp_max)}{' '}
						<span> &#x2103; </span>
					</p>
					<p>
						Temperatura minima: {parseInt(main.temp_min)}{' '}
						<span> &#x2103; </span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Clima;
