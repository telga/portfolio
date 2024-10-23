<template>
  <div id="app" class="min-h-screen bg-bg-primary">
    <Header v-if="!$route.meta.hideHeaderFooter" />
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
    <Footer v-if="!$route.meta.hideHeaderFooter" />
  </div>
</template>

<script>
import Header from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.setFavicon()
  },
  methods: {
    setFavicon() {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
      link.type = 'image/png'
      link.rel = 'shortcut icon'
      link.href = require('/public/images/nordlogo.png')
      document.getElementsByTagName('head')[0].appendChild(link)
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
