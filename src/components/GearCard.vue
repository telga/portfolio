<template>
  <div class="bg-bg-secondary rounded-lg shadow-lg p-8 mb-8 animate-fade-in hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
    <h2 class="text-2xl font-bold mb-4 text-accent flex items-center">
      <component :is="iconMap[props.item.icon]" class="w-6 h-6 mr-2" />
      {{ $t(`gear.subcategories.${props.item.name}`) }}
    </h2>
    <div>
      <p class="text-text-primary mb-4">{{ $t(`gear.descriptions.${props.item.name}`) }}</p>
      <div v-for="subItem in props.item.items" :key="subItem.name" class="mt-4 p-4 bg-bg-primary rounded-lg">
        <h3 class="text-xl font-semibold mb-2 text-accent">{{ $t(`gear.items.${subItem.name}.name`) }}</h3>
        <p class="mb-4">{{ $t(`gear.items.${subItem.name}.description`) }}</p>
        <div class="w-48 h-0.5 bg-accent mb-4"></div>
        <ul class="list-disc list-inside">
          <li v-for="(spec, index) in subItem.specs || subItem.features" :key="index" class="animate-slide-in" :style="{ animationDelay: `${index * 100}ms` }">
            {{ $t(`gear.items.${subItem.name}.${subItem.specs ? 'specs' : 'features'}.${index}`, spec) }}
          </li>
        </ul>
        <div class="lg:hidden mt-4">
          <img :src="subItem.image" :alt="$t(`gear.items.${subItem.name}.name`)" class="w-full h-auto rounded-lg">
        </div>
        <button class="mt-4 bg-bg-secondary text-text-primary py-2 px-4 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 hover:bg-bg-secondary-hover">
          {{ $t('gear.viewProduct') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { 
  DevicePhoneMobileIcon, ComputerDesktopIcon, CodeBracketIcon, DocumentIcon, TruckIcon, HomeIcon, BookOpenIcon
} from '@heroicons/vue/24/outline';

const props = defineProps(['item']);

const iconMap = {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  DocumentIcon,
  TruckIcon,
  HomeIcon,
  BookOpenIcon
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out forwards;
  opacity: 0;
}

button {
  padding: 0.5rem 1rem;
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  transform: translateY(2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
