<template>
  <div>
    <GearCard 
      v-for="item in hardwareGearItems" 
      :key="item.name" 
      :item="item" 
      category="hardware"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import GearCard from './GearCard.vue';

defineProps(['hardwareGearItems']);
</script>
