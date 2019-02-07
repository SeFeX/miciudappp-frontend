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
        <v-card-title class="headline">Lista de usuarios
          <v-spacer />
          <v-btn
            color="white"
            flat
            nuxt
            to="/usuarios/agregar"
          >Agregar usuario</v-btn>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :loading="loading"
            :headers="headers"
            :items="usuarios"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.username }}</td>
              <td class="text-xs-right">{{ props.item.email }}</td>
              <td class="text-xs-right">
                <v-btn flat icon color="blue">
                  <v-icon>remove_red_eye</v-icon>
                </v-btn>
                <v-btn flat icon color="green">
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn flat icon color="red">
                  <v-icon>delete_sweep</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          
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
        headers: [
          {
            text: 'Nombre',
            align: 'left',
            value: 'name'
          },
          { text: 'Username', value: 'username' },
          { text: 'Email', value: 'email' },
          { text: 'Acciones', sortable: false, value: '' },
        ],
        err : '',
        loading: false,
        usuarios: []
    }
  },
  methods: {
      loadUsers(){
        let vm = this
        vm.loading = true
        vm.$axios.get('http://localhost:8080/Usuario')
        .then(function (response) {
          vm.usuarios = response.data
        })
        .catch(function(err) {
          vm.err = "No se pudieron obtener los usuarios"
        })
        .then(function() {
          vm.loading = false
        })
      }
  },
  mounted(){
    this.loadUsers()
  },
  head () {
    return {
      title: 'Lista de Usuarios'
    }
  }
}
</script>
