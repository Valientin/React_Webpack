const initialState = {
    items: [
        {
            name: '1',
            lastname: '2'
        },
        {
            name: '2',
            lastname: '1'
        }
    ]
}

export default function(state = initialState, action){
	switch(action.type){
		case 'GET_ITEMS':
			return Object.assign({}, state, {
                items: action.payload
              })
		default:
			return state;
	}
}