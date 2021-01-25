<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <FacetFilter> </FacetFilter>
      </v-col>
      <v-col cols="9">
        <v-row align="center">
          <v-col cols="8">
            <v-breadcrumbs
              :items="[
                {
                  text: 'Dashboard',
                  disabled: false,
                  href: '/',
                },
                {
                  text: 'Players',
                  disabled: false,
                  href: '',
                },
                {
                  text: 'Mumbai Indians',
                  disabled: true,
                  href: '',
                },
              ]"
            >
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </v-col>
          <v-col cols="2">
            <v-select
              color=""
              solo
              dense
              placeholder="Sort"
              flat
              outlined
              rounded
              prepend-icon="mdi-sort-ascending"
              item-color=""
              :items="['Player Name', 'highest RR', 'Highest Average']"
              v-model="sort"
              hide-details
            ></v-select>
          </v-col>

          <v-col cols="2">
            <v-btn-toggle tile :value="1" color="primary darken-3" mandatory dense>
              <v-btn :ripple="false" disabled>
                <v-icon>
                  mdi-format-list-bulleted
                </v-icon>
              </v-btn>
              <v-btn :ripple="false" >
                <v-icon>
                  mdi-view-grid-outline
                </v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row>
          <v-container grid-list-xs class="results-container">
            <v-row>
              <v-col cols="4" v-for="n in 25" :key="n">
                <v-card class="mx-auto" tile hover max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="@/assets/players/virat.jpg"
                  >
                    <v-card-title>Virat Kohli</v-card-title>
                  </v-img>
                  <v-card-subtitle class="pb-0"> Mumbai Indians</v-card-subtitle>
                  <v-card-text class="text--primary">
                    <div>10-06-1981 • Right Hand • Right-arm medium • India</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-row class="mt-5">
            <v-col>
              <div class="text-center">
                <v-pagination v-model="page" :length="4" circle></v-pagination>
              </div>
            </v-col>
          </v-row>
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
    page: 1,
  }),
  components: { FacetFilter },
};
</script>

<style lang="scss">
.results-container {
  height: 1000px;
  overflow-y: scroll;
}
</style>
