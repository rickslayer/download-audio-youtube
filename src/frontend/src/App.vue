<template>
  <v-app>
    <v-app-bar
      app
      color="teal darken-4"
      dark
    >
   <a href="https://prra.dev">
    <v-img
          alt="PRRA Logo"
          class="shrink mr-2"
          contain
          src='https://res.cloudinary.com/prra/image/upload/c_scale,w_500/v1587654993/PRRA.site/logo.prra_sxtsgv.png'
          transition="scale-transition"
          width="157"
        />
      </a>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/rickslayer/download-audio-youtube"
        target="_blank"
        text
      >
        <span class="mr-2">Github Repository</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <YoutubeAudio/>  
      <Footer/>  
    </v-main>
  </v-app>
</template>

<script>
import YoutubeAudio from './components/YoutubeAudio';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    YoutubeAudio,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
