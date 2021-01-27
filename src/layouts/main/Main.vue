import { types } from 'node-sass';
<template>
  <!-- App.vue -->

  <v-app :style="{'background': '#f7f7f7'}">
    <!-- <v-navigation-drawer app> -->
    <v-navigation-drawer
      app
      expand-on-hover
      floating
      elevation="0"
      dark
      color="#202020"
      v-model="drawer"
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="@/assets/index.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="title">
              Search IPL
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list shaped nav dense>
        <v-list-item-group mandatory v-model="selectedItem" color="primary">
          <v-list-item
            :disabled="i != 0"
            v-for="(item, i) in sidebarItems"
            :key="i"
            :ripple="false"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- </v-navigation-drawer> -->

    <v-app-bar app elevation="0" dark color="#202020">
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>[Demo]</v-toolbar-title>
      <v-col>
        <router-link :to="this.$route.name == 'searchIPL' ? '/results' : 'search'">
          <v-btn color="primary">{{
            this.$route.name == 'searchIPL' ? 'Filter View' : 'Normal View'
          }}</v-btn>
        </router-link>
      </v-col>

      <v-spacer></v-spacer>

      <v-text-field
        hide-details
        clearable
        single-line
        placeholder="Search for Players"
        filled
        rounded
        dense
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>{{ mdiDotsVertical }}</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in ['Dashboard', 'Profile', 'Log out']"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>{{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view :isMobile="isMobile"></router-view>
      </v-container>
    </v-main>
    <!-- <v-footer app> -->
    <v-app-bar color="white" v-if="isMobile" bottom fixed>
      <v-row align="center" justify="center" class="text-center">
        <v-col>
          <v-btn block depressed plain :ripple="false" color="">Sort</v-btn>
        </v-col>
        <v-col>
          <v-btn block depressed plain :ripple="false" color="">Filter</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- </v-footer> -->
  </v-app>
</template>

<script>
// @ is an alias to /src
import sidebarItems from '@/components/SideBar/sideBarItems.js';
import { mdiDotsVertical } from '@mdi/js'
export default {
  name: 'Main',
  components: {},
  data: () => ({
    sidebarItems,
    mdiDotsVertical,
    drawer: null,
    isMobile: false,
    active: 'home',
    selectedItem: 0,
  }),
  beforeDestroy() {
    if (typeof window === 'undefined') return;

    window.removeEventListener('resize', this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();

    window.addEventListener('resize', this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960;
    },
  },
};
</script>
