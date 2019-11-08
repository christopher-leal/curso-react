const initialState = {
	error: false
};

const validacionReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'VALIDAR_FORMULARIO':
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
};

export default validacionReducer;
