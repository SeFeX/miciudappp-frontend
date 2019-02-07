<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="miniVariant = !miniVariant" />
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-tooltip left>
        <v-btn slot="activator" icon large @click="logout">
          <v-icon large>exit_to_app</v-icon>
        </v-btn>
        <span>Cerrar Sesión</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      fixed: false,
      miniVariant: true,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'person',
          title: 'Usuarios',
          to: '/usuarios'
        }
      ],
      title: 'Mi Ciudad App'
    }
  },
  methods:{
    logout(){
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>
