import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_EXITO,
	AGREGAR_PRODUCTO_ERROR,
	COMENZAR_DESCARGA_PRODUCTOS,
	DESCARGA_PRODUCTOS_EXITOSA,
	DESCARGA_PRODUCTOS_ERROR,
	OBTENER_PRODUCTO_ELIMINAR,
	PRODUCTO_ELIMINADO_EXITO,
	PRODUCTO_ELIMINADO_ERROR,
	PRODUCTO_EDITAR_ERROR,
	PRODUCTO_EDITAR_EXITO,
	OBTENER_PRODUCTO_EDITAR,
	COMENZAR_EDICION_PRODUCTO,
	PRODUCTO_EDITADO_EXITO,
	PRODUCTO_EDITADO_ERROR
} from '../types';
import clienteAxios from '../config/axios';

// crear un nuevo producto - funcion principal

export const crearProductoAction = (producto) => {
	return (dispatch) => {
		dispatch(nuevoProducto());

		//insertar en la api
		clienteAxios
			.post('/libros', producto)
			.then((respuesta) => {
				// console.log(respuesta);
				dispatch(agregarProductoExito(producto));
			})
			.catch((error) => {
				// console.log(error);
				dispatch(agregarProductoError());
			});
	};
};
export const nuevoProducto = () => ({
	type: AGREGAR_PRODUCTO
});

export const agregarProductoExito = (producto) => ({
	type: AGREGAR_PRODUCTO_EXITO,
	payload: producto
});

export const agregarProductoError = () => ({
	type: AGREGAR_PRODUCTO_ERROR
});

// obtener listado de productos

export const obtenerProductosAction = () => {
	return (dispatch) => {
		dispatch(obtenerProductosComienzoAction());

		// consultar api
		clienteAxios
			.get('/libros')
			.then((result) => {
				dispatch(obtenerProductosExitoAction(result.data));
				// console.log(result);
			})
			.catch((err) => {
				dispatch(obtenerProductosErrorAction());
				// console.log(err);
			});
	};
};
export const obtenerProductosComienzoAction = () => ({
	type: COMENZAR_DESCARGA_PRODUCTOS
});
export const obtenerProductosExitoAction = (productos) => ({
	type: DESCARGA_PRODUCTOS_EXITOSA,
	payload: productos
});
export const obtenerProductosErrorAction = () => ({
	type: DESCARGA_PRODUCTOS_ERROR
});

// funcion que elimina un producto en especifico
export const borrarProductoAction = (id) => {
	return (dispatch) => {
		dispatch(obtenerProductoEliminar());

		// eliminar en la api
		clienteAxios
			.delete(`/libros/${id}`)
			.then((result) => {
				if (result.status === 200) {
					dispatch(eliminarProductoExito(id));
				}
				// console.log(result);
			})
			.catch((err) => {
				dispatch(eliminarProductoError());
				// console.log(err);
			});
	};
};

export const obtenerProductoEliminar = () => ({
	type: OBTENER_PRODUCTO_ELIMINAR
});

export const eliminarProductoExito = (id) => ({
	type: PRODUCTO_ELIMINADO_EXITO,
	payload: id
});
export const eliminarProductoError = () => ({
	type: PRODUCTO_ELIMINADO_ERROR
});

// obtener producto a editar
export const obtenerProductoEditarAction = (id) => {
	return (dispatch) => {
		dispatch(obtenerProductoEditar());
		clienteAxios
			.get(`/libros/${id}`)
			.then((result) => {
				dispatch(productoEditarExito(result.data));
			})
			.catch((err) => {
				dispatch(productoEditarError());
				// console.log(err);
			});
	};
};
export const obtenerProductoEditar = () => ({
	type: OBTENER_PRODUCTO_EDITAR
});
export const productoEditarExito = (producto) => ({
	type: PRODUCTO_EDITAR_EXITO,
	payload: producto
});
export const productoEditarError = () => ({
	type: PRODUCTO_EDITAR_ERROR
});

// modifica un producto en la api y state
export const editarProductoAction = (producto) => {
	console.log(producto);
	return (dispatch) => {
		dispatch(editarProducto());
		clienteAxios
			.put(`/libros/${producto.id}`, producto)
			.then((result) => {
				dispatch(editarProductoExito(result.data));
			})
			.catch((err) => {
				dispatch(editarProductoError());
				// console.log(err);
			});
	};
};
export const editarProducto = () => ({
	type: COMENZAR_EDICION_PRODUCTO
});
export const editarProductoExito = (producto) => ({
	type: PRODUCTO_EDITADO_EXITO,
	payload: producto
});
export const editarProductoError = () => ({
	type: PRODUCTO_EDITADO_ERROR
});
