<template>
  <div class="min-h-screen bg-bg-primary text-text-primary px-2 pt-8 sm:pt-8">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="bg-bg-secondary rounded-lg shadow-lg p-6 mb-8 animate-slide-in">
        <h1 class="text-3xl sm:text-4xl font-bold text-accent mb-2">
          {{ $t('gallery.title') }}
        </h1>
        <p class="text-[var(--accent-secondary)] font-bold">
          {{ $t('gallery.description') }}
        </p>
      </div>

      <!-- Image Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(image, index) in visibleImages" 
             :key="index"
             class="bg-bg-secondary rounded-lg shadow-lg overflow-hidden animate-fade-in-up"
             :style="{ animationDelay: `${index * 100}ms` }">
          <div class="relative aspect-square group cursor-pointer"
               @click="openLightbox(index)">
            <img 
              v-lazy="image.url"
              :alt="image.description"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white text-lg">Click to view</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading indicator -->
      <div v-if="loading" class="text-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-accent border-t-transparent mx-auto"></div>
      </div>

      <!-- Bottom padding when all images are loaded -->
      <div v-if="(page - 1) * imagesPerPage >= galleryImages.length" 
           class="pb-8">
      </div>

      <!-- Lightbox -->
      <div v-if="lightboxOpen" 
           class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
           @click="closeLightbox">
        <button @click="prevImage" class="absolute left-4 text-white text-4xl hover:text-accent">
          ‹
        </button>
        <img 
          :src="visibleImages[currentImageIndex].url" 
          :alt="visibleImages[currentImageIndex].description"
          class="max-h-[90vh] max-w-[90vw] object-contain"
        >
        <button @click="nextImage" class="absolute right-4 text-white text-4xl hover:text-accent">
          ›
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

useI18n()

// Simulated gallery data - replace with your actual images
const galleryImages = ref([
  {
    url: 'https://picsum.photos/800/800?random=1',
    title: 'Image 1',
    description: 'Description for image 1'
  },
  {
    url: 'https://picsum.photos/800/800?random=2',
    title: 'Image 2',
    description: 'Description for image 2'
  },
  {
    url: 'https://picsum.photos/800/800?random=3',
    title: 'Image 3',
    description: 'Description for image 3'
  },
  {
    url: 'https://picsum.photos/800/800?random=4',
    title: 'Image 4',
    description: 'Description for image 4'
  },
  {
    url: 'https://picsum.photos/800/800?random=5',
    title: 'Image 5',
    description: 'Description for image 5'
  },
  {
    url: 'https://picsum.photos/800/800?random=6',
    title: 'Image 6',
    description: 'Description for image 6'
  },
  {
    url: 'https://picsum.photos/800/800?random=7',
    title: 'Image 7',
    description: 'Description for image 7'
  },
  {
    url: 'https://picsum.photos/800/800?random=8',
    title: 'Image 8',
    description: 'Description for image 8'
  },

  // Add more images as needed
])

const visibleImages = ref([])
const loading = ref(false)
const page = ref(1)
const imagesPerPage = 6

// Lightbox state
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

// Load more images when scrolling
const loadMoreImages = async () => {
  if (loading.value) return
  
  // Check if we've loaded all images
  const start = (page.value - 1) * imagesPerPage
  if (start >= galleryImages.value.length) return
  
  loading.value = true
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const newImages = galleryImages.value.slice(start, start + imagesPerPage)
  visibleImages.value.push(...newImages)
  
  page.value++
  loading.value = false
}

// Infinite scroll handler
const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500) {
    loadMoreImages()
  }
}

// Lightbox controls
const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const prevImage = (e) => {
  e.stopPropagation()
  currentImageIndex.value = (currentImageIndex.value - 1 + visibleImages.value.length) % visibleImages.value.length
}

const nextImage = (e) => {
  e.stopPropagation()
  currentImageIndex.value = (currentImageIndex.value + 1) % visibleImages.value.length
}

// Keyboard navigation for lightbox
const handleKeydown = (e) => {
  if (!lightboxOpen.value) return
  
  switch (e.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      prevImage(e)
      break
    case 'ArrowRight':
      nextImage(e)
      break
  }
}

onMounted(() => {
  loadMoreImages()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add to your existing styles */
.v-lazy-image {
  opacity: 0;
  transition: opacity 0.4s;
}

.v-lazy-image-loaded {
  opacity: 1;
}
</style> 