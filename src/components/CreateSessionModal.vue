<template>
  <v-dialog max-width="600" v-model="visible" persistent>

    <template v-slot:activator="{ on, attrs }">
      <v-btn x-large outlined color="primary" width="260" v-bind="attrs" v-on="on">
        Create session
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5">
        New session
      </v-card-title>


      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Session name" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h2>Session teams:</h2>
            </v-col>
            <v-col cols="12" v-for="(team, index) in teams" :key="index">

              <v-text-field label="Team name" dense single-line v-model="team.name">
                <template v-slot:append>
                  <v-hover v-slot="{ hover }">
                    <v-icon
                        v-if="teams.length > 1"
                        small :color="hover ? 'primary' : ''"
                        @click="deleteTeam(index)"
                    >
                      mdi-trash-can-outline
                    </v-icon>

                  </v-hover>
                </template>
              </v-text-field>

            </v-col>
            <v-col cols="12" class="text-right">
              <v-btn small @click="addTeam">
                Add team
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="accent" outlined @click="visible = false">
          CANCEL
        </v-btn>
        <v-btn color="primary" outlined @click="createSession">
          CREATE
        </v-btn>

      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
export default {
  name: "CreateSessionModal",
  data: () => ({
    visible: false,
    teams: [
      {
        name: null,
        id: null
      }
    ]
  }),
  methods: {
    deleteTeam(teamIndex) {
      this.teams.splice(teamIndex, 1);
    },
    addTeam() {
      this.teams.push({id: null, name: null});
    },
    createSession() {


      this.visible = true;
    }
  }
}
</script>

<style scoped>

</style>
