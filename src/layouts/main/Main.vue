import { types } from 'node-sass';
<template>
  <!-- App.vue -->

  <v-app>
    <!-- <v-navigation-drawer app> -->
    <SideBar :sidebarItems="sidebarItems" />

    <!-- </v-navigation-drawer> -->

    <v-app-bar app elevation="0" dark color="#202020">
      <v-toolbar-title>[Development - Demo]</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon> -->

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
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar/SideBar.vue';
import sidebarItems from '@/components/SideBar/sideBarItems.js';

export default {
  name: 'Main',
  components: { SideBar },
  data: () => ({
    sidebarItems,
  }),
};
</script>
