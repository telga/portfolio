<template>
  <div>
    <GearCard 
      v-for="item in softwareGearItems" 
      :key="item.name" 
      :item="item" 
      category="software"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import GearCard from './GearCard.vue';

defineProps(['softwareGearItems']);
</script>
