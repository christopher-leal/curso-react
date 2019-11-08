import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {
	const [ ciudad, setCiudad ] = useState('');
	const [ pais, setPais ] = useState('');
	const [ error, setError ] = useState(false);
	const [ resultado, setResultado ] = useState({});
	useEffect(
		() => {
			// prevenir ejecucion
			if (ciudad === '') return;
			consultarApi();
		},
		[ ciudad, pais ]
	);

	const datosConsulta = (datos) => {
		// validar que ambos campos esten
		if (datos.ciudad === '' || datos.pais === '') {
			setError(true);
			return;
		}
		setCiudad(datos.ciudad);
		setPais(datos.pais);
		setError(false);
	};

	const consultarApi = async () => {
		const appId = 'e9e9fd7a80878caaf6da2d56f1892b49';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=metric`;

		// consultar la url
		const respuesta = await fetch(url);
		const resultado = await respuesta.json();

		setResultado(resultado);
		// console.log(resultado);
	};

	// cargar un componente condicionalmente
	let componente;
	if (error) {
		componente = <Error mensaje="Ambos campos son obligatorios" />;
	} else if (resultado.cod == '404') {
		componente = <Error mensaje="Ciudad no encontrada" />;
	} else {
		componente = <Clima resultado={resultado} />;
	}

	return (
		<div className="App">
			<Header titulo="React clima app" />
			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<Formulario datosConsulta={datosConsulta} />
						</div>
						<div className="col s12 m6">{componente}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
