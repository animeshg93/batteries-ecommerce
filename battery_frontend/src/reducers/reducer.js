const initialState = {
  quantity: 0
};

function rootReducer(state = initialState, action) {
	switch (action.type){
		case "change_quantity":
			return Object.assign({}, state, {
		      quantity: parseInt(action.quantity)
		    })
			
		default:
			return state;
	}
};

export default rootReducer;