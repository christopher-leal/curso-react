import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
	const [ presupuesto, setPresupuesto ] = useState(0);
	const [ restante, setRestante ] = useState(0);
	const [ preguntaPresupuesto, setPreguntaPresupuesto ] = useState(true);
	const [ gasto, setGasto ] = useState({});
	const [ gastos, setGastos ] = useState([]);
	const [ crearGasto, setCrearGasto ] = useState(false);
	useEffect(
		() => {
			if (crearGasto) {
				setGastos([ ...gastos, gasto ]);
				setCrearGasto(false);
				const presupuestoRestante = restante - gasto.cantidadGasto;
				setRestante(presupuestoRestante);
			}
		},
		[ crearGasto ]
	);

	const eliminarGasto = (id) => {
		console.log(id);
		const gastoEliminado = gastos.find((gasto) => gasto.id === id);
		setRestante(restante + gastoEliminado.cantidadGasto);
		const gastosRestantes = gastos.find((gasto) => gasto.id !== id);
		if (gastosRestantes) {
			setGastos([ gastosRestantes ]);
		} else {
			setGastos([]);
		}
	};
	return (
		<div className="App container">
			<header>
				<h1>Gasto Semanal</h1>
				<div className="contenido-principal contenido">
					{preguntaPresupuesto ? (
						<Pregunta
							setPresupuesto={setPresupuesto}
							setPreguntaPresupuesto={setPreguntaPresupuesto}
							setRestante={setRestante}
						/>
					) : (
						<div className="row">
							<div className="one-half column">
								<Formulario
									setGasto={setGasto}
									setCrearGasto={setCrearGasto}
								/>
							</div>
							<div className="one-half column">
								<Listado
									gastos={gastos}
									eliminarGasto={eliminarGasto}
								/>
								<ControlPresupuesto
									presupuesto={presupuesto}
									restante={restante}
								/>
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
