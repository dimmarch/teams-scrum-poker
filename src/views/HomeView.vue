<template>
  <v-container style="max-width: 1000px">
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>
          Scrum Poker Planner
        </h1>
      </v-col>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" class="text-center">
        <v-btn x-large outlined color="primary" width="260">
          Create new session
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" class="text-center">
        <v-btn x-large outlined color="primary" width="260">
          Join existing session
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <h2>
          Last Sessions:
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table
            hide-default-footer
            disable-pagination
            disable-sort
            :headers="headers"
            :items="getLastSessions()"
            :item-class="rowClass"
            class="elevation-1 mr-2"
            @click:row="rowClicked"
        >
          <template v-slot:[`item.date`]="{ item }">
            {{ formatDate(item.date) }}
          </template>

          <template v-slot:[`item.labels`]="{ item }">
            <v-chip label disabled x-small color="green" text-color="black" class="session-label" v-if="item.labels.open">OPEN</v-chip>
            <v-chip label disabled x-small color="red lighten-1" text-color="black" class="session-label" v-else>CLOSED</v-chip>
            <v-chip label disabled x-small color="primary" text-color="black" class="session-label" v-if="item.labels.owner">OWNER</v-chip>
          </template>

          <template v-slot:[`item.action`]>
            <v-icon color="primary">
              mdi-open-in-new
            </v-icon>
          </template>

        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'

export default {
  name: 'HomeApp',
  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      {
        text: 'Date',
        align: 'start',
        sortable: false,
        value: 'date',
        width: '200px'
      },
      {
        align: 'center',
        sortable: false,
        value: 'labels',
        width: '65px'
      },
      {
        value: 'action',
        class: 'd-none d-sm-table-cell',
        cellClass: 'd-none d-sm-table-cell',
        sortable: false,
        width: '20pt'
      }
    ]
  }),
  methods: {
    rowClass() {
      return 'clickable';
    },
    getLastSessions() {
      return [{
        name: 'Some session name',
        date: moment(),
        labels: {
          open: true,
          owner: true
        },
        id: 'id'
      }, {
        name: 'Release 16 part 2',
        labels: {
          open: true,
        },
      }, {
        name: 'test3',
        labels: {},
      }];
    },
    rowClicked(item) {
      console.log(item);
    },
    formatDate(date) {
      return date ? moment(date).format('LLL') : '';
    }

  },

  components: {},
}
</script>

<style>
.clickable {
  cursor: pointer;
}

.session-label {
  justify-content: center;
  font-weight: bold;
  width: 65px;
  margin-left: 2pt;
  margin-right: 2pt;
}
</style>
