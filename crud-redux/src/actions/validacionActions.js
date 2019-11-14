import {
	VALIDAR_FORMULARIO,
	VALIDAR_FORMULARIO_ERROR,
	VALIDAR_FORMULARIO_EXITO
} from '../types';

export const validarFormularioAction = () => {
	return (dispatch) => {
		dispatch(iniciarValidacion());
	};
};

export const iniciarValidacion = () => {
	return {
		type: VALIDAR_FORMULARIO
	};
};

export const validacionExitoAction = () => {
	return {
		type: VALIDAR_FORMULARIO_EXITO
	};
};
export const validacionErrorAction = () => {
	return {
		type: VALIDAR_FORMULARIO_ERROR
	};
};
