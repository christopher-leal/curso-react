import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
	let citasIniciales = JSON.parse(localStorage.getItem('citas'));
	if (!citasIniciales) {
		citasIniciales = [];
	}
	// array destructuring
	const [ citas, setCitas ] = useState(citasIniciales);

	const guardarCita = (cita) => {
		setCitas([ ...citas, cita ]);
	};
	const eliminarCita = (index) => {
		const nuevaCita = [ ...citas ];
		nuevaCita.splice(index, 1);
		setCitas(nuevaCita);
	};
	useEffect(
		() => {
			let citasLs = JSON.parse(localStorage.getItem('citas'));
			if (citasLs) {
				localStorage.setItem('citas', JSON.stringify(citas));
			} else {
				localStorage.setItem('citas', JSON.stringify([]));
			}
		},
		[ citas ]
	);
	// Cargar condicionalmente un titulo
	const titulo =
		Object.keys(citas).length === 0
			? 'No hay citas'
			: 'Administrar las citas';
	return (
		<div>
			<h1>Administrador de pacientes</h1>
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario guardarCita={guardarCita} />
					</div>
					<div className="one-half column">
						<h2>{titulo}</h2>
						{citas.map((cita, index) => (
							<Cita
								key={index}
								index={index}
								cita={cita}
								eliminarCita={eliminarCita}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
