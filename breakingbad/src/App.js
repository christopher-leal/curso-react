import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Frase from './components/Frase';

function App() {
	const [ frase, setFrase ] = useState({});

	const consultarApi = async () => {
		const resultado = await axios(
			'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
		);
		setFrase(resultado.data[0]);
	};

	useEffect(() => {
		consultarApi();
	}, []);
	return (
		<div className="contenedor">
			<Frase frase={frase} />
			<button
				onClick={() => {
					consultarApi();
				}}
			>
				Generete new
			</button>
		</div>
	);
}

export default App;
