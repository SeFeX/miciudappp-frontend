export default function ({ store, route, redirect }) {
	if (store.state.user == null &&  route.path != '/login' && route.path != '/register' ) {
    	return redirect('/login')
  	}
}