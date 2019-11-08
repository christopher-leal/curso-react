import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriaProvider from './context/CategoriaContext';
import EventosProvider from './context/EventosContext';
import ListaEventos from './components/ListaEventos';

function App() {
	return (
		<EventosProvider>
			<CategoriaProvider>
				<Header />
				<div className="uk-container">
					<Formulario />
					<ListaEventos />
				</div>
			</CategoriaProvider>
		</EventosProvider>
	);
}

export default App;
