<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">Agregar Usuario
        </v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation v-model="valid">
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex
                  sm12
                  md4
                >
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :counter="25"
                    label="Nombre"
                    required
                  ></v-text-field>
                </v-flex>

                <v-flex
                  sm12
                  md4
                >
                  <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    :counter="15"
                    label="Username"
                    required
                  ></v-text-field>
                </v-flex>

                <v-flex
                  sm12
                  md4
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="white"
            flat
            nuxt
            to="/usuarios"
          >Cancelar</v-btn>
          <v-spacer />
          <v-btn
            :disabled="!valid || name == '' || username  == '' || email == ''"
            color="blue"
          >Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      valid: false,
      name: '',
      username: '',
      email: '',
      nameRules: [
        v => !!v || 'El nombre es obligatorio',
        v => v.length <= 25 || 'El nombre no puede tener mas de 25 caracteres'
      ],
      usernameRules: [
        v => !!v || 'El nombre de usuario es obligatorio',
        v => v.length <= 15 || 'El nombre de usuario no puede tener mas de 15 caracteres'
      ],
      emailRules: [
        v => !!v || 'El correo es obligatorio',
        v => /.+@.+/.test(v) || 'Este correo no es valido'
      ]
    }
  },
  computed: {
    isFormValid(){
      //return this.$refs.form.validate()
      return true
    }
  },
  methods: {
    saveUsuario(){
    }
  },
  mounted(){

  },
  head () {
    return {
      title: 'Agregar Usuario'
    }
  }
}
</script>
