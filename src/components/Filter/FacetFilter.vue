<template>
  <v-card class="ma-3 pa-1 f-filter" width="300" flat>
    <v-row align-content="space-between">
      <v-col class="pb-0" cols="6">
        <span class="overline ml-3">Filter</span>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="pb-0 text-right" v-if="filters" cols="6" align-self="center">
        <v-btn
          color="blue darken-3"
          class="text-capitalize overline"
          small
          depressed
          plain
          :ripple="false"
        >
          Clear Filter
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-select
          flat
          outlined
          class="mx-3 mb-2"
          :items="countryList"
          label="Country"
          dense
          hide-details=""
          color=""
          filled
          :value="countrySel"
        ></v-select>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-list dense nav flat>
          <v-list-group active-class="no-effect" :ripple="false" flat dense :value="true">
            <template v-slot:activator>
              <v-list-item-title>
                Player Type
                <v-badge
                  color="accent"
                  transition=""
                  class="mt-0"
                  dot
                  inline
                  v-if="batModel.length || bowlTypeModel.length"
                ></v-badge>
              </v-list-item-title>
            </template>

            <v-list-group
              active-class="no-effect"
              :ripple="false"
              dense
              no-action
              sub-group
              :value="playertype.bat"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Batsmen</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item-group multiple v-model="batModel">
                <v-list-item v-for="(title, i) in batType" :key="i" link>
                  <v-list-item-title>
                    {{ title }}
                  </v-list-item-title>
                  <v-badge
                    color="accent"
                    inline
                    :content="getRandomInt(0, 500)"
                  ></v-badge>
                </v-list-item>
              </v-list-item-group>
            </v-list-group>

            <v-list-group
              active-class="no-effect"
              :ripple="false"
              flat
              no-action
              sub-group
              :value="playertype.bowl"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Bowler</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item-group v-model="bowlTypeModel" multiple>
                <v-list-item color="#42a2a2" v-for="(type, i) in bowlType" :key="i" link>
                  <v-list-item-title v-text="type"></v-list-item-title>
                  <v-badge
                    color="accent"
                    inline
                    :content="getRandomInt(0, 400)"
                  ></v-badge>
                </v-list-item>
              </v-list-item-group>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-list dense nav>
          <v-list-group
            active-class="no-effect"
            class="no-effect-fix"
            :ripple="false"
            :value="true"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  >Batting Stats
                  <v-badge
                    color="accent"
                    class="mt-0"
                    dot
                    v-if="r2[0] != 0 || r2[1] != 88 || r1[0] != 0 || r1[1] != 250"
                    inline
                  ></v-badge
                ></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="caption mb-0">
              <span>Strike Rate</span>
              <v-spacer></v-spacer>
              <span>{{ `${r1[0]} - ${r1[1]}` }}</span>
            </v-list-item>
            <v-list-item>
              <v-row class="mr-1">
                <v-range-slider
                  thumb-color=""
                  max="250"
                  min="0"
                  v-model="r1"
                  track-color=""
                  track-fill-color=""
                  class="mt-2 pl-3"
                >
                </v-range-slider>
              </v-row>
            </v-list-item>
            <v-list-item class="caption nmb-0">
              <span>Average</span>
              <v-spacer></v-spacer>
              <span>{{ `${r2[0]} - ${r2[1]}` }}</span>
            </v-list-item>
            <v-list-item>
              <v-row class="mr-1">
                <v-range-slider
                  max="88"
                  min="0"
                  v-model="r2"
                  class="mt-2 pl-3"
                ></v-range-slider>
              </v-row>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-list flat dense>
          <v-list-group active-class="no-effect" :ripple="false" :value="teamDrop">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  >Teams<v-badge
                    color="accent"
                    class="mt-0"
                    dot
                    v-if="selectedTeams.length"
                    inline
                  ></v-badge
                ></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item-group multiple v-model="selectedTeams">
              <v-list-item
                color="#42a2a2"
                v-for="(team, i) in teams"
                :key="i"
                class="pl-10"
              >
                <template v-slot:default="{}">
                  <v-list-item-content>
                    <v-list-item-title>{{ team }}</v-list-item-title>
                  </v-list-item-content>
                  <v-badge
                    color="accent"
                    inline
                    :content="getRandomInt(13, 25)"
                  ></v-badge>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>
        </v-list>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <v-list dense nav>
          <v-list-item class="caption mb-0">
            <v-list-item-title class="subtitle-1"
              >Birth Year<v-badge
                color="accent"
                class="mt-0"
                v-if="by[0] != 1969 || by[1] != 1998"
                dot
                inline
              ></v-badge
            ></v-list-item-title>
            <v-spacer></v-spacer>
            <v-list-item-subtitle class="text-right">
              {{ `${by[0]} - ${by[1]}` }}
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-row class="mr-1">
              <v-range-slider
                thumb-color=""
                max="1998"
                min="1969"
                v-model="by"
                track-color=""
                track-fill-color=""
                color=""
                class="mt-2"
              >
              </v-range-slider>
            </v-row>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'facet-filter',
  props: {
    filters: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    applyFilter() {
      // Applying some random filters ** doesn't afffect content
      if (this.filters) {
        this.batModel.push(1);
        this.bowlTypeModel = [1, 3, 4];
        this.countrySel = 'India';
        this.playertype.bat = true;
        this.playertype.bowl = true;
        this.by = [1980, 1995];
        this.selectedTeams = [4, 5, 6, 7, 11, 13];
        this.r2 = [20, 50];
        this.r1 = [100, 200];
        this.teamDrop = true;
      }
    },
  },
  computed: {},
  created() {
    this.applyFilter();
  },
  data: () => ({
    countrySel: '',
    playertype: {
      bat: false,
      bowl: false,
    },
    teamDrop: true,
    countryList: [
      'India',
      'Bangladesh',
      'Australia',
      'South Africa',
      'New Zealand',
      'West Indies',
      'England',
      'Sri Lanka',
      'Pakistan',
      'Zimbabwea',
      'Netherland',
    ],
    title: '',
    r2: [0, 88],
    r1: [0, 250],
    by: [1969, 1998],
    batType: ['Right Handed', 'Left Handed'],
    batModel: [],
    bowlType: [
      'Legbreak',
      'Slow left-arm chinaman',
      'Left-arm fast-medium',
      'Right-arm offbreak',
      'Legbreak googly',
      'Slow left-arm orthodox',
      'Right-arm medium',
      'Right-arm medium-fast',
      'Right-arm fast-medium',
      'Right-arm fast',
      'Left-arm medium',
      'Left-arm medium-fast',
      'Left-arm fast',
      'Right-arm bowler',
    ],
    bowlTypeModel: [],
    teams: [
      'Pune Warriors',
      'Kolkata Knight Riders',
      'Rajasthan Royals',
      'Kochi Tuskers Kerala',
      'Gujarat Lions',
      'Chennai Super Kings',
      'Rising Pune Supergiants',
      'Delhi Daredevils',
      'Deccan Chargers',
      'Delhi Capitals',
      'Mumbai Indians',
      'Sunrisers Hyderabad',
      'Rising Pune Supergiant',
      'Royal Challengers Bangalore',
      'Kings XI Punjab',
    ],
    selectedTeams: [],
  }),
};
</script>

<style lang="scss">
.v-slider__thumb::before {
  width: 18px !important;
  height: 18px !important;
  left: -3px !important;
  top: -3px !important;
}
.f-filter {
  max-height: 1000px;
  overflow: auto;
  overflow-x: hidden;
  scrollbar-width: thin;

  .v-list-group__header,
  .v-list-item--dense,
  .v-list--dense .v-list-item {
    height: 30px;
    min-height: 30px;
  }
  .v-list-item--dense .v-list-item__icon,
  .v-list--dense .v-list-item .v-list-item__icon {
    margin-top: 2px;
  }

  .no-effect:hover::before {
    opacity: 0;
  }
}

.no-effect-fix > div:hover::before {
  opacity: 0 !important;
}
</style>
