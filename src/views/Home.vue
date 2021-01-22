<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <FacetFilter> </FacetFilter>
      </v-col>
      <v-col cols="9">
        <v-row align="center">
          <v-col cols="8">7,654 results found in 5ms</v-col>
          <v-col cols="2">
            <v-select
              color="red"
              solo
              dense
              placeholder="Sort"
              flat
              outlined
              rounded
              prepend-icon="mdi-sort-ascending"
              item-color="orange"
              :items="['Player Name', 'highest RR', 'Highest Average']"
              v-model="sort"
              hide-details
            ></v-select>
          </v-col>

          <v-col cols="2">
            <v-btn-toggle mandatory dense>
              <v-btn>
                <v-icon>
                  mdi-format-list-bulleted
                </v-icon>
              </v-btn>
              <v-btn>
                <v-icon>
                  mdi-view-grid-outline
                </v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row>
          <v-container grid-list-xs>
            <!-- <v-row>
              <v-col cols="">
                <v-card class="">
                  <v-avatar class="ma-3" size="125" tile>
                    <v-img src="@/assets/players/virat.jpg"></v-img>
                  </v-avatar>
                  <v-spacer></v-spacer>
                  <v-card-title class="headline">
                    Virat Kohli
                  </v-card-title>
                  <v-card-subtitle
                    >Mumbai Indians • 10-06-1981 • Right Hand • Right-arm medium • India
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row> -->

            <v-row>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="@/assets/players/virat.jpg"
                  >
                    <v-card-title>Viral Kohli</v-card-title>
                  </v-img>
                  <v-card-subtitle class="pb-0"> Mumbai Indians</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>10-06-1981 • Right Hand • Right-arm medium • India</div>

                    <!-- <div>Whitsunday Island, Whitsunday Islands</div> -->
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="@/assets/players/virat.jpg"
                  >
                    <v-card-title>Viral Kohli</v-card-title>
                  </v-img>
                  <v-card-subtitle class="pb-0"> Mumbai Indians</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>10-06-1981 • Right Hand • Right-arm medium • India</div>

                    <!-- <div>Whitsunday Island, Whitsunday Islands</div> -->
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card class="mx-auto" max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="@/assets/players/virat.jpg"
                  >
                    <v-card-title>Viral Kohli</v-card-title>
                  </v-img>
                  <v-card-subtitle class="pb-0"> Mumbai Indians</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>10-06-1981 • Right Hand • Right-arm medium • India</div>

                    <!-- <div>Whitsunday Island, Whitsunday Islands</div> -->
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import FacetFilter from '@/components/Filter/FacetFilter';

export default {
  name: 'Home',
  data: () => ({
    sort: '',
  }),
  components: { FacetFilter },
};
</script>
