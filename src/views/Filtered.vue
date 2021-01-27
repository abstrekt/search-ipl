<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" v-if="!isMobile">
        <FacetFilter :filters="true"> </FacetFilter>
      </v-col>
      <v-col cols="12" md="9">
        <v-row justify="space-between" align="center">
          <v-col cols="8" sm="8" md="8">
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
                <v-icon>{{ mdiChevronRight }}</v-icon>
              </template>
            </v-breadcrumbs>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="6" md="2" v-if="!isMobile">
            <v-select
              color=""
              solo
              dense
              placeholder="Sort"
              flat
              outlined
              rounded
              :prepend-icon="mdiSortAscending"
              item-color=""
              :items="['Player Name', 'Run Rate', 'Average']"
              v-model="sort"
              hide-details
            ></v-select>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="4" md="2" sm="4" class="text-right">
            <v-btn-toggle tile :value="1" color="primary darken-3" mandatory dense>
              <v-btn :ripple="false" disabled>
                <v-icon>
                  {{ mdiFormatListBulleted }}
                </v-icon>
              </v-btn>
              <v-btn :ripple="false">
                <v-icon>
                  {{ mdiViewGridOutline }}
                </v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-row>
          <v-container
            grid-list-xs
            class="results-container"
            :style="{ 'scrollbar-width': 'thin' }"
          >
            <v-row>
              <v-col cols="12" md="4" sm="6" v-for="n in 25" :key="n">
                <v-card class="mx-auto" tile hover max-width="400">
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="@/assets/players/virat.png"
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
          <v-row class="my-5">
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
import { mdiChevronRight, mdiViewGridOutline, mdiFormatListBulleted, mdiSortAscending } from '@mdi/js';

export default {
  props: {
    isMobile: {
      type: Boolean,
    }
  },
  data: () => ({
    sort: '',
    mdiChevronRight,
    mdiFormatListBulleted,
    mdiViewGridOutline,
    mdiSortAscending,
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
