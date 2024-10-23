<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center" v-text="$t('gear.title')"></h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="item in gearItems" :key="item.name" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <img :src="item.image" :alt="item.name" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2" v-text="$t(`gear.items.${item.name}.name`)"></h2>
          <p class="text-gray-600 dark:text-gray-300" v-text="$t(`gear.items.${item.name}.description`)"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gearData from '@/data/gear.json'

export default {
  name: 'GearPage',
  data() {
    return {
      gearItems: gearData
    }
  }
}
</script>

<style scoped>
.container {
  @apply transition-colors duration-300;
}
</style>

