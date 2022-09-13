<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h1>Task Management App</h1>
    </v-app-bar>

    <v-main>
      <section-list></section-list>
    </v-main>

    <v-footer app
      color="primary lighten-1"
      padless
    >
      <v-card-text class="py-2 white--text text-center">
        © {{ new Date().getFullYear() }} — <strong>Task Management App</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
import SectionList from './components/SectionList.vue';

export default {
  name: 'App',
  components: {
    SectionList
  },
};
</script>

<style scoped>
p{
  text-align: center;
}
</style>
