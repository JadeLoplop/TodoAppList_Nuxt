<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center mx-3">
        <h2>Todo List Web App</h2>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <NuxtPage/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  })
};
</script>
