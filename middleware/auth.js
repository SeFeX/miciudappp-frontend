export default function ({ store, route, redirect }) {
	console.log(route)
	if (store.state.user == null) {
    	return redirect('/login')
  	}
}