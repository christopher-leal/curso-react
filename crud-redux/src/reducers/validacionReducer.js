import {
	VALIDAR_FORMULARIO,
	VALIDAR_FORMULARIO_ERROR,
	VALIDAR_FORMULARIO_EXITO
} from '../types';

const initialState = {
	error: false
};

const validacionReducer = (state = initialState, action) => {
	switch (action.type) {
		case VALIDAR_FORMULARIO:
			return {
				...state,
				error: false
			};
		case VALIDAR_FORMULARIO_EXITO:
			return {
				...state,
				error: false
			};
		case VALIDAR_FORMULARIO_ERROR:
			return {
				...state,
				error: true
			};

		default:
			return state;
	}
};

export default validacionReducer;
