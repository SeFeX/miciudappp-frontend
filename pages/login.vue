<template>
  <v-app id="inspire" dark>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Iniciar sesión</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <p class="text-danger center-text" v-if="err!=null">{{err}}</p>
                  <v-text-field v-model="email" prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary"
                  nuxt
                  to="/register">No tengo cuenta</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    layout: 'none',
    data: () => ({
      drawer: null,
      err: null,
      email: '',
      password: ''
    }),
    props: {
      source: String
    },
    methods: {
      login(){
        let vm = this
        vm.err = null
        vm.$axios.post('http://localhost:8080/login',
        {
          email: vm.email,
          password: vm.password
        })
        .then(function (response) {
          vm.$store.commit('login',response.data.user)
          vm.$router.push('/')
        })
        .catch(function(err) {
          vm.err = "Usuario o contraseña incorrecta"
        })
        
      }
    },
    mounted(){
      if(this.$store.state.user!=null){
        this.$router.push('/')
      }
    }
  }
</script>