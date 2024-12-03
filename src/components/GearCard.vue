<template>
  <div 
    :class="[
      'bg-bg-secondary rounded-lg shadow-lg p-8 mb-8 animate-fade-in hover:shadow-xl transition-all duration-300 ease-in-out transform',
      { 'cursor-pointer': !isMainOpen }
    ]"
    @click="handleClick"
  >
    <div 
      class="flex items-center justify-between"
      id="gear-card-dropdown-close-section"
    >
      <h2 class="text-3xl font-bold text-[--accent] flex items-center select-none">
        <component :is="iconMap[props.item.icon]" class="w-6 h-6 mr-2 text-[--accent-secondary]" />
        {{ $t(`gear.subcategories.${props.item.name}`) }}
      </h2>
      <ChevronDownIcon 
        :class="['w-6 h-6 transition-transform duration-300', { 'transform rotate-180': isMainOpen }]"
      />
    </div>
    <div v-show="isMainOpen" class="mt-4 animate-slide-down">
      <p class="text-[--text-primary] mb-4">{{ $t(`gear.descriptions.${props.item.name}`) }}</p>
      <div v-for="subItem in props.item.items" :key="subItem.name" class="mt-4">
        <div class="mt-2 p-4 bg-bg-primary rounded-lg animate-slide-down">
          <h3 class="text-xl font-semibold text-[--accent-secondary]">{{ $t(`gear.items.${subItem.name}.name`) }}</h3>
          <p class="mb-4 text-[--accent-hover]">{{ $t(`gear.items.${subItem.name}.description`) }}</p>
          <div class="p-4 bg-[var(--bg-secondary)] rounded-lg">
            <ul class="list-disc list-inside">
              <div v-for="(spec, specIndex) in subItem.specs || subItem.features" :key="specIndex" class="animate-slide-in" :style="{ animationDelay: `${specIndex * 100}ms` }">
                {{ $t(`gear.items.${subItem.name}.${subItem.specs ? 'specs' : 'features'}.${specIndex}`, spec) }}
              </div>
            </ul>
          </div>
          <!-- <a 
            :href="subItem.links?.[this.$i18n.locale] || '#'"
            target="_blank"
            rel="noopener noreferrer"
            @click.stop 
            class="inline-block mt-4 bg-bg-secondary font-bold text-[var(--accent-secondary)] hover:text-[var(--accent-hover)] py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5"
          >
            {{ $t('gear.viewProduct') }}
          </a> -->
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
  category: String
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

const handleClick = (event) => {
  if (isMainOpen.value) {
    const target = event.target;
    if (target.closest('#gear-card-dropdown-close-section')) {
      toggleMainDropdown();
    }
  } else {
    toggleMainDropdown();
  }
};

onMounted(() => {
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
