import React, { useEffect, useState } from 'react';
import imagen from './cryptomonedas.png';
import Form from './components/Form';
import axios from 'axios';
import Spinner from './components/Spinner';
import Cotizacion from './components/Cotizacion';

function App() {
	const [ moneda, setMoneda ] = useState('');
	const [ cripto, setCripto ] = useState('');
	const [ spinner, setSpinner ] = useState(false);
	const [ resultado, setResultado ] = useState({});
	useEffect(
		() => {
			if (moneda && cripto) {
				cotizarCripto();
			}
		},
		[ cripto, moneda ]
	);
	const cotizarCripto = async () => {
		const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
		const resultado = await axios.get(url);
		setSpinner(true);
		setTimeout(() => {
			setSpinner(false);
			setResultado(resultado.data.DISPLAY[cripto][moneda]);
		}, 2000);
	};

	const componente = spinner ? (
		<Spinner />
	) : (
		<Cotizacion resultado={resultado} />
	);
	return (
		<div className="container">
			<div className="row">
				<div className="one-half column">
					<img
						src={imagen}
						alt="Imagen crytos"
						className="logotipos"
					/>
				</div>
				<div className="one-half column">
					<h1>Cotiza criptomonedas al instante</h1>
					<Form setMoneda={setMoneda} setCripto={setCripto} />
					{componente}
				</div>
			</div>
		</div>
	);
}

export default App;
