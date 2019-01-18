import { 
	EMPLOYEE_UPDATE, 
	EMPLOYEE_CREATE, 
	EMPLOYEE_SAVE_SUCCESS,
	EDIT_CANCEL
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_CREATE:
			return INITIAL_STATE;
		case EMPLOYEE_SAVE_SUCCESS:
			return INITIAL_STATE;
		case EDIT_CANCEL:
			return INITIAL_STATE;
		case EMPLOYEE_UPDATE:
			//action.payload === {prop: 'name', value: 'jane'}
			//Using key interoplation to create dynamic key - ex: [keyname]
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};
