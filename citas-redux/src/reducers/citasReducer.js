const initialState = {
	citas: []
};

const citasReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'AGREGAR_CITA':
			return {
				...state,
				citas: [ ...state.citas, action.payload ]
			};
		default:
			return state;
	}
};

export default citasReducer;
