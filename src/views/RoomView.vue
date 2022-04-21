<template>
  <v-container
      id="input-usage"
      fluid
  >
    <v-row
        justify="center"
        v-for="topic in getSession().topics" :key="topic.id"
    >
      <v-col cols="4">
        {{ topic.name }}
        <v-text-field
            v-model="input"
            hint="This field uses counter prop"
        ></v-text-field>
        <v-expansion-panels
            v-model="topicTeams"
            multiple
            accordion
        >
          <v-expansion-panel
              v-for="(team,i) in getTeams(topic.teamIds)"
              :key="i"
          >
            <v-expansion-panel-header>{{ team.name }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'RoomView',
  data: () => ({
    topicTeams: [],
    input: ''
  }),
  methods: {
    ...mapGetters([
        'getSession'
    ]),
    getTeams(teamIds) {
      return this.getSession().teams.filter(team => teamIds.includes(team.id));
    }
  }

}
</script>
