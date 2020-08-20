<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn icon large color="red">
          <v-icon>mdi-youtube-studio</v-icon>
        </v-btn>
      </v-col>
      <v-col class="mb-4" cols="12" sm="12" md="12">
        <h1 class="font-weight-bold mb-3">
          Download Audio from Youtube URL
        </h1>
      </v-col>
      <v-col cols="12" sm="8" md="8" offset-sm="2" class="text-center">
          <v-text-field
            label="URL"
            placeholder="https://youtube.com/"
            outlined
            @change="changeUrl"
            :disabled=showProcess
            v-model=url
          ></v-text-field>
          <v-btn
            large color="primary"
            v-show="showBtn"
            :href="url_download"
            download>
            Download
          </v-btn>
          <v-img
            :src="imgThumb"
            :lazy-src="imgThumb"
            :aspect-ratio="16/9"
            v-show="showBtn"
          >
          </v-img>
        </v-col>
         <v-col cols="12" class="text-center">
          <v-progress-circular
            :size="70"
            :width="7"
            color="green"
            indeterminate
            v-show="showProcess"
          ></v-progress-circular>
         <h4
            v-show="showProcess"
            >
            Might be take a while because it need to download and convert the video on server
          </h4>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
const axios = require('axios')
/* eslint-disable no-useless-escape */
  export default {
    name: 'YoutubeAudio',
    data: () => ({
      url: '',
      url_download:"",
      showBtn: false,
      showProcess:false,
      imgThumb:"https://i.ytimg.com/vi/tfSi3foze3Q/maxresdefault.jpg",
    }),
    methods: {
      changeUrl(val) {
        this.url = val
        let validate = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
        if(this.url.match(validate) === null){
          alert('Digite uma URL do youtube válida')
          return false
        }
        let url_api = process.env.VUE_APP_API_URL
        let data = {
           "url": this.url
        }
        this.showProcess = true
        axios.post(url_api,data)
        .then((response) => {
          if(response.status == 200) {
            this.url_download = response.data.download_url
            this.showBtn = true
            this.showProcess = false
            this.imgThumb = response.data.thumbnail_url
          }
        })
        .catch((error) => {
          alert(error)
          this.showProcess = false
        })
      }
    }
  }
</script>
