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
      <v-list-item class="px-2" >
        <v-list-item-avatar>
          <v-img src="@/assets/ipl.jpg"></v-img>
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
        <v-list-item v-for="(item, i) in sidebarItems" :key="i" :ripple="false">
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
    selectedItem: 0,
  }),
};
</script>
