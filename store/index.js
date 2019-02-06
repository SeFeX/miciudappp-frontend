export const state = () => ({
  user: null
})

export const mutations = {
  login (state) {
    state.user = {
    	name: 'Sergio',
    	username: 'Sefex',
    	email: 'sergiomontiel1@hotmail.com',
    	password: 'kasdjalsdkqlwmql'
    }
  },
  logout (state){
  	state.user = null
  }
}
