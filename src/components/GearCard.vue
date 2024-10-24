<template>
  <div 
    :class="[
      'bg-bg-secondary rounded-lg shadow-lg p-8 mb-8 animate-fade-in hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1',
      { 'cursor-pointer': !isMainOpen }
    ]"
  >
    <div 
      @click="toggleMainDropdown"
      class="flex items-center justify-between cursor-pointer"
    >
      <h2 class="text-2xl font-bold text-accent flex items-center">
        <component :is="iconMap[props.item.icon]" class="w-6 h-6 mr-2" />
        {{ $t(`gear.subcategories.${props.item.name}`) }}
      </h2>
      <ChevronDownIcon 
        :class="['w-6 h-6 transition-transform duration-300', { 'transform rotate-180': isMainOpen }]"
      />
    </div>
    <div v-show="isMainOpen" class="mt-4 animate-slide-down">
      <p class="text-text-primary mb-4">{{ $t(`gear.descriptions.${props.item.name}`) }}</p>
      <div v-for="subItem in props.item.items" :key="subItem.name" class="mt-4">
        <div class="w-full text-left p-4 bg-bg-primary rounded-lg">
          <h3 class="text-xl font-semibold text-accent">{{ $t(`gear.items.${subItem.name}.name`) }}</h3>
        </div>
        <div class="mt-2 p-4 bg-bg-primary rounded-lg animate-slide-down">
          <p class="mb-4">{{ $t(`gear.items.${subItem.name}.description`) }}</p>
          <div class="w-48 h-0.5 bg-accent mb-4"></div>
          <ul class="list-disc list-inside">
            <li v-for="(spec, specIndex) in subItem.specs || subItem.features" :key="specIndex" class="animate-slide-in" :style="{ animationDelay: `${specIndex * 100}ms` }">
              {{ $t(`gear.items.${subItem.name}.${subItem.specs ? 'specs' : 'features'}.${specIndex}`, spec) }}
            </li>
          </ul>
          <button @click.stop class="mt-4 bg-bg-secondary text-text-primary py-2 px-4 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 hover:bg-bg-secondary-hover">
            {{ $t('gear.viewProduct') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { 
  DevicePhoneMobileIcon, ComputerDesktopIcon, CodeBracketIcon, DocumentIcon, TruckIcon, HomeIcon, BookOpenIcon, ChevronDownIcon
} from '@heroicons/vue/24/outline';

const props = defineProps({
  item: Object,
  category: String // Add this prop to distinguish between hardware and software
});

const iconMap = {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  DocumentIcon,
  TruckIcon,
  HomeIcon,
  BookOpenIcon
};

const isMainOpen = ref(false);

const toggleMainDropdown = () => {
  isMainOpen.value = !isMainOpen.value;
};

onMounted(() => {
  // Open 'home' card for hardware and 'development' card for software by default
  if ((props.category === 'hardware' && props.item.name === 'home') || 
      (props.category === 'software' && props.item.name === 'development')) {
    isMainOpen.value = true;
  }
});
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

@keyframes slideDown {
  from { max-height: 0; opacity: 0; }
  to { max-height: 1000px; opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out forwards;
  opacity: 0;
}

.animate-slide-down {
  animation: slideDown 0.3s ease-out;
  overflow: hidden;
}
</style>
