<template>
  <v-app>
<!--    <v-app-bar-->
<!--        app-->
<!--        color="primary"-->
<!--        dark-->
<!--    >-->
<!--      <h1 class="display-2 font-weight-bold mb-3">-->
<!--        Scrum poker planner-->
<!--      </h1>-->
<!--    </v-app-bar>-->

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
