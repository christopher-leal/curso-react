import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';

function App() {
	const [ artista, setArtista ] = useState('');
	const [ letra, setLetra ] = useState([]);
	const [ info, setInfo ] = useState({});

	// metodo para consultar api de las letras de canciones
	const getLetras = async ({ artista, cancion }) => {
		const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
		const resultado = await fetch(url);
		const response = await resultado.json();
		setLetra([ response.lyrics ]);
		setArtista(artista);
	};
	// metodo para consultar la api de informacion
	const consultarApiInfo = async () => {
		if (artista) {
			const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
			const resultado = await fetch(url);
			const data = await resultado.json();
			// console.log(data);
			console.log(data);
			setInfo(data.artists[0]);
		}
	};

	useEffect(
		() => {
			consultarApiInfo();
		},
		[ artista ]
	);

	return (
		<div className="App">
			<Formulario getLetras={getLetras} />
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6">
						<Informacion info={info} />
					</div>
					<div className="col-md-6">
						<Cancion letra={letra} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
