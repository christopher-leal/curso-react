import React, { useState, useEffect } from 'react';
import Buscador from './components/Buscador';
import ListadoImagenes from './components/ListadoImagenes';

function App() {
	const [ busqueda, setBusqueda ] = useState('');
	const [ imagenes, setImagenes ] = useState([]);
	const [ paginaActual, setPaginaActual ] = useState(1);
	const [ totalPaginas, setTotalPaginas ] = useState(1);
	useEffect(
		() => {
			const consultarApi = async () => {
				const key = '13979395-0f5ad9cab440916204e7f3cc7';
				const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=40&page=${paginaActual}`;
				const resultado = await fetch(url);
				const data = await resultado.json();
				setImagenes(data.hits);
				const total = Math.ceil(data.totalHits / 30);
				setTotalPaginas(total);
				const jumbotron = document.querySelector('.jumbotron');
				jumbotron.scrollIntoView({
					block: 'end',
					behavior: 'smooth'
				});
			};
			if (busqueda === '') return;
			consultarApi();
		},
		[ busqueda, paginaActual ]
	);
	return (
		<div className="app container">
			<div className="jumbotron">
				<p className="lead text-center">Buscador de imagenes</p>
				<Buscador setBusqueda={setBusqueda} />
			</div>
			<div className="row justify-content-center">
				<ListadoImagenes imagenes={imagenes} />
				{paginaActual !== 1 && (
					<button
						onClick={() => setPaginaActual(paginaActual - 1)}
						className="btn btn-info mr-1"
					>
						&laquo; Anterior
					</button>
				)}

				{paginaActual !== totalPaginas && (
					<button
						onClick={() => setPaginaActual(paginaActual + 1)}
						className="btn btn-info "
					>
						Siguiente &raquo;
					</button>
				)}
			</div>
		</div>
	);
}

export default App;
