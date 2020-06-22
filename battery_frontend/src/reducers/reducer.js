const initialState = {
  quantity: 0
};

function rootReducer(state = initialState, action) {
	switch (action.type){
		case "change_quantity":
			console.log(state.quantity)
			return Object.assign({}, state, {
		      quantity: state.quantity+parseInt(action.quantity)
		    })
			
		default:
			return state;
	}
};

export default rootReducer;