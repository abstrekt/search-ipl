import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import './font.sass';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#659dbd',
        secondary: '#b0bec5',
        accent: '#BD8565',
        error: '#b71c1c',
      },
    },
  },
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
