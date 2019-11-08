import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AgregarProducto from './components/AgregarProducto';
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';
import Header from './components/Header';
import Producto from './components/Producto';
import axios from 'axios';

function App() {
	const [ productos, setProductos ] = useState([]);
	const [ refresh, setRefresh ] = useState(true);
	useEffect(
		() => {
			console.log('entro');
			if (refresh) {
				const consultarApi = async () => {
					const resultado = await axios.get(
						'http://localhost:3001/restaurant'
					);
					setProductos(resultado.data);
				};

				consultarApi();
			}
			setRefresh(false);
		},
		[ refresh ]
	);
	return (
		<Router>
			<Header />
			<main className="container mt-5">
				<Switch>
					<Route
						exact
						path="/productos"
						render={() => (
							<Productos
								productos={productos}
								setRefresh={setRefresh}
							/>
						)}
					/>
					<Route
						exact
						path="/productos/nuevo"
						render={() => (
							<AgregarProducto setRefresh={setRefresh} />
						)}
					/>
					<Route exact path="/productos/:id" component={Producto} />
					<Route
						exact
						path="/productos/editar/:id"
						render={(props) => {
							let id = props.match.params.id;
							const producto = productos.filter(
								(producto) => producto.id === id
							);
							return (
								<EditarProducto
									producto={producto[0]}
									setRefresh={setRefresh}
								/>
							);
						}}
					/>
				</Switch>
			</main>
			<p className="mt-4 p-2 text-center">
				Todos los derechos reservados
			</p>
		</Router>
	);
}

export default App;
