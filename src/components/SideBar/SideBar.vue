<template>
  <v-navigation-drawer
    app
    expand-on-hover
    floating
    elevation="0"
    dark
    color="#202020"
    v-model="navbar"
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="@/assets/ipl.jpg"></v-img>
        </v-list-item-avatar>
        <!-- </v-list-item> -->

        <!-- <v-list-item link> -->
        <v-list-item-content>
          <v-list-item-title class="title">
            Search IPL
          </v-list-item-title>
          <!-- <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- <v-divider></v-divider> -->

    <v-list shaped nav dense>
      <!-- <v-subheader class="truncate">Category</v-subheader> -->

      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in sidebarItems" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    sidebarItems: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    navbar: 'true',
    active: 'home',
    selectedItem: 1,
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
  }),
};
</script>

<!--
<template>
  <div class="ma-12 pa-12">
    <v-card>
      <v-navigation-drawer app permanent width="350">
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item> 

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Search IPL
              </v-list-item-title>
              <v-list-item-subtitle>Facet Filter for Searching IPL.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-group sub-group ripple>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Teams</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(team, i) in teams" :key="i">
              <v-list-item-action>
                <v-checkbox :input-value="active"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title v-text="team"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>
-->
