
export function getItems() {
	let payload = [
        {
            name: 'first',
            lastname: 'Http'
        },
        {
            name: 'second',
            lastname: 'Https'
        },
        {
            name: 'third',
            lastname: 'Http1'
        }
    ]

	return{
		type:'GET_ITEMS',
		payload
	}
}