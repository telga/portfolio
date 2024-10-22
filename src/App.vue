<template>
  <div class="min-h-screen bg-bg-primary">
    <Header />
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
    <Footer />
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
