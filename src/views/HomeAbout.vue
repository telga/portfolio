<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8 lg:p-12">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-bold text-accent mb-8 sm:mb-12 animate-slide-in text-center"
          style="animation-delay: 0ms;">
        {{ $t('about.title') }}
      </h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div class="animate-slide-in h-full" style="animation-delay: 100ms;">
          <div class="flex flex-col h-full">
            <div class="w-full flex-grow aspect-square md:aspect-[4/3] lg:h-[480px] xl:h-[420px] 2xl:h-[420px] overflow-hidden rounded-lg shadow-lg bg-bg-secondary relative transition-shadow duration-300 hover:shadow-xl">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-bg-secondary/10 pointer-events-none"></div>
              <canvas ref="threeCanvas" class="w-full h-full"></canvas>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="bg-bg-secondary rounded-lg shadow-lg p-6 animate-slide-in"
               style="animation-delay: 200ms;">
            <h2 class="text-2xl font-bold text-accent mb-4">
              {{ $t('about.about') }}
            </h2>
            <div class="space-y-6">
              <p v-for="(paragraph, index) in bioParagraphs" 
                 :key="index" 
                 class="text-text-secondary leading-relaxed animate-slide-in-down"
                 :style="{ animationDelay: `${300 + index * 100}ms` }">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <!-- <div class="hidden lg:block lg:h-0 xl:h-10"></div> -->

          <div class="bg-bg-secondary rounded-lg shadow-lg p-4 lg:mt-12 xl:mt-12 animate-slide-in"
               style="animation-delay: 300ms;">
            <div class="flex justify-center items-center gap-4 text-accent">
              <template v-for="(link, index) in socialLinks" :key="link.name">
                <a v-if="link.name !== 'Email'"
                   :href="link.url"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="text-[var(--accent-secondary)] hover:text-accent-hover transition-colors duration-200">
                  {{ link.name }}
                </a>
                <button v-else
                        @click="copyEmail"
                        class="text-[var(--accent-secondary)] hover:text-accent-hover transition-colors duration-200">
                  Email
                </button>
                <span v-if="index < socialLinks.length - 1" class="text-[var(--text-primary)]">|</span>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <!-- Projects and Experiences row -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <!-- Projects section -->
          <div id="projects" class="bg-bg-secondary rounded-lg shadow-lg p-6 animate-slide-in"
               style="animation-delay: 300ms;">
            <h2 class="text-2xl font-bold text-accent mb-4">{{ $t('projects.title') }}</h2>
            <div class="grid grid-cols-1 gap-6">
              <div v-for="(project, index) in localizedProjects" 
                   :key="project.id" 
                   class="rounded-lg overflow-hidden shadow-md animate-fade-in-up flex flex-col"
                   :style="{ 
                     animationDelay: `${400 + index * 100}ms`,
                     backgroundColor: 'var(--bg-primary)',
                   }">
                <img :src="project.image" :alt="project.title" class="w-full h-36 object-cover">
                <div class="p-4 flex-grow flex flex-col">
                  <h3 class="text-lg font-bold mb-2 text-text-primary">{{ project.title }}</h3>
                  <p class="text-sm text-text-secondary mb-4 flex-grow">{{ project.description }}</p>
                  <div class="flex justify-between mt-auto">
                    <a :href="project.github" target="_blank" rel="noopener noreferrer" 
                       class="animated-button github-button text-sm">
                      {{ $t('projects.github') }}
                    </a>
                    <a :href="project.demo" target="_blank" rel="noopener noreferrer" 
                       class="animated-button demo-button text-sm">
                      {{ $t('projects.demo') }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Experience section -->
          <div id="experience" class="bg-bg-secondary rounded-lg shadow-lg p-6 animate-slide-in"
               style="animation-delay: 350ms;">
            <h2 class="text-2xl font-bold text-accent mb-4">{{ $t('experiences.education.title') }}</h2>
            <div v-for="(edu, key) in education.items" :key="key" 
                 class="bg-bg-primary p-4 rounded-lg shadow-md mb-4 animate-slide-in-right"
                 :style="{ animationDelay: `${450 + key * 100}ms` }">
              <h3 class="text-lg font-medium text-accent">
                {{ $t(`experiences.education.items.${key}.degree`) }}
              </h3>
              <p class="text-text-primary">
                {{ $t(`experiences.education.items.${key}.school`) }}, 
                {{ $t(`experiences.education.items.${key}.location`) }}
              </p>
              <p class="text-sm text-text-secondary">
                {{ $t(`experiences.education.items.${key}.duration`) }}
              </p>
              <!-- Add details list -->
              <ul class="mt-4 list-disc list-inside">
                <li v-for="(detail, detailKey) in edu.details" :key="detailKey" 
                    class="text-sm mt-2 animate-slide-in-right" 
                    :style="{ animationDelay: `${(key * 100) + (detailKey * 50)}ms` }">
                  {{ $t(`experiences.education.items.${key}.details.${detailKey}`) }}
                </li>
              </ul>
            </div>

            <h2 class="text-2xl font-bold text-accent mb-4 mt-8">{{ $t('experiences.work.title') }}</h2>
            <div v-for="(job, key) in work.items" :key="key" 
                 class="bg-bg-primary p-4 rounded-lg shadow-md mb-4 animate-slide-in-right"
                 :style="{ animationDelay: `${550 + key * 100}ms` }">
              <h3 class="text-lg font-medium text-accent">
                {{ $t(`experiences.work.items.${key}.title`) }}
              </h3>
              <p class="text-text-primary">
                {{ $t(`experiences.work.items.${key}.company`) }}, 
                {{ $t(`experiences.work.items.${key}.location`) }}
              </p>
              <p class="text-sm text-text-secondary">
                {{ $t(`experiences.work.items.${key}.duration`) }}
              </p>
            </div>
          </div>
        </div>

          <!-- Skills section full width -->
          <div class="bg-bg-secondary rounded-lg shadow-lg p-6 animate-slide-in"
               style="animation-delay: 400ms;">
            <h2 class="text-2xl font-bold text-accent mb-4">
              {{ $t('about.skills') }}
            </h2>
            <ul class="flex flex-wrap gap-2">
              <li v-for="(skill, index) in skills" :key="skill" 
                  class="bg-bg-primary text-text-primary px-4 py-2 rounded-full text-sm shadow animate-slide-in"
                  :style="{ animationDelay: `${500 + index * 50}ms` }">
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
    </div>

    <!-- Toast Notification - Moved outside main content -->
    <div v-if="showToast" 
         class="fixed bottom-4 right-4 bg-accent text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in z-50">
      Copied email address to clipboard!
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { usePortfolioStore } from '@/store/portfolioStore'
import experiencesData from '@/data/experiencesData.js'

const { t, locale } = useI18n()
const portfolioStore = usePortfolioStore()

const skills = ref(['Vue.js', 'React.js', 'Node.js', 'HTML', 'CSS', 'Python', 'Java', 'JavaScript', 'WSL', 'Linux (Arch, Ubuntu)'])

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/telga' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/bnguy23' },
  { name: 'Instagram', url: 'https://instagram.com/br.ainn' },
  { name: 'Email', url: 'briann2305@gmail.com' }  // Remove mailto:
]
  
const bioParagraphs = computed(() => {
  return t('about.bio').split('\n\n')
})

const threeCanvas = ref(null)
let scene, camera, renderer, controls, model
let resizeObserver = null
let animationFrameId = null  // Add this to track animation frame

let autoRotate = true
const normalRotationSpeed = 0.003 // Slower default rotation speed
let currentRotationSpeed = 0.2 // Start with fast rotation
const slowdownFactor = 0.95 // Controls how quickly it slows down
const minRotationSpeed = normalRotationSpeed // Target rotation speed

// Declare updateModelPosition at script level
let updateModelPosition = null

// Setup Three.js scene
const initThree = () => {
  // Scene setup
  scene = new THREE.Scene()
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(
    45, // Reduced FOV for less distortion
    1,  // Maintain aspect ratio of 1:1
    0.1,
    1000
  )
  // Move camera down just a bit
  camera.position.set(0, 0, 2.8) // Adjusted from (0, -0.5, 2.8)
  camera.lookAt(0, -0.3, 0)  // Adjusted from (0, -0.8, 0)

  // Renderer setup
  renderer = new THREE.WebGLRenderer({
    canvas: threeCanvas.value,
    antialias: true,
    alpha: true,
    precision: 'highp',
    powerPreference: 'high-performance',
  })
  // Adjust size to match new container size (96 * 4 = 384)
  renderer.setSize(256, 256)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Improved lighting setup
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2) // Increased ambient light
  scene.add(ambientLight)
  
  // Main directional light
  const mainLight = new THREE.DirectionalLight(0xffffff, 1.5) // Increased intensity
  mainLight.position.set(2, 2, 1)
  scene.add(mainLight)

  // Fill light from opposite side
  const fillLight = new THREE.DirectionalLight(0xffffff, 0.8)
  fillLight.position.set(-2, 0, -2)
  scene.add(fillLight)

  // Top light for better coverage
  const topLight = new THREE.DirectionalLight(0xffffff, 0.8)
  topLight.position.set(0, 5, 0)
  scene.add(topLight)

  // Load 3D Model with improved smoothing
  const loader = new GLTFLoader()
  loader.load(
    '/models/profile.gltf',
    (gltf) => {
      model = gltf.scene
      
      model.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true
          node.receiveShadow = true
          
          if (node.material) {
            node.material.needsUpdate = true
            // Restore original material settings
            node.material.roughness = 0.9
            node.material.metalness = 0.1
            node.material.envMapIntensity = 0.5
          }
        }
      })

      scene.add(model)
      
      // Center and scale the model
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)
      
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 1.5 / maxDim  // Adjusted scale to better fit viewport
      model.scale.multiplyScalar(scale)

      // Adjust position based on screen size
      updateModelPosition = () => {
        if (window.matchMedia('(min-width: 1024px) and (max-width: 1535px)').matches) {
          model.position.y = -1.0  // More down for lg screens
        } else {
          model.position.y = -0.8  // Default position for other screens
        }
        controls.target.set(0, model.position.y + 0.4, 0)
        controls.update()
      }

      // Initial position
      updateModelPosition()

      // Update on resize
      window.addEventListener('resize', updateModelPosition)
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error)
    }
  )

  // Modified OrbitControls settings
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.minDistance = 1    // Prevent zooming in too close
  controls.maxDistance = 3      // Limit how far can zoom out
  controls.enablePan = false
  controls.autoRotate = true
  controls.autoRotateSpeed = 2

  // Update autoRotate based on controls
  controls.addEventListener('start', () => {
    autoRotate = false
    controls.autoRotate = false
  })
}

// Animation loop
const animate = () => {
  if (!scene || !camera || !renderer) return
  
  animationFrameId = requestAnimationFrame(animate)
  
  if (model && autoRotate && !controls.autoRotate) {
    model.rotation.y += currentRotationSpeed
    
    if (currentRotationSpeed > minRotationSpeed) {
      currentRotationSpeed *= slowdownFactor
      
      if (currentRotationSpeed < minRotationSpeed) {
        currentRotationSpeed = minRotationSpeed
        controls.autoRotate = true
        autoRotate = false
      }
    }
  }
  
  controls?.update()
  renderer?.render(scene, camera)
}

// Enhanced cleanup function
const cleanup = () => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }

  if (controls) {
    controls.dispose()
    controls = null
  }

  if (renderer) {
    renderer.dispose()
    renderer = null
  }

  if (scene) {
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry?.dispose()
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose())
          } else {
            object.material.dispose()
          }
        }
      }
    })
    scene = null
  }

  camera = null
  model = null
}

// Add debounce function
function debounce(fn, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delay)
  }
}

// Update renderer sizing with debounce
const updateRendererSize = debounce(() => {
  if (!threeCanvas.value || !renderer || !camera) return
  
  const container = threeCanvas.value.parentElement
  if (!container) return

  const size = container.clientWidth
  renderer.setSize(size, size)
  camera.aspect = 1
  camera.updateProjectionMatrix()
}, 16) // roughly one frame at 60fps

// Update resize observer setup
onMounted(() => {
  nextTick(() => {
    if (!threeCanvas.value) return
    
    initThree()
    animate()
    
    resizeObserver = new ResizeObserver(() => {
      if (threeCanvas.value?.parentElement) {
        updateRendererSize()
      }
    })
    
    if (threeCanvas.value.parentElement) {
      resizeObserver.observe(threeCanvas.value.parentElement)
    }

    // Initial size update
    updateRendererSize()
  })
})

// Ensure proper cleanup
onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  cleanup()
  if (updateModelPosition) {
    window.removeEventListener('resize', updateModelPosition)
  }
})

const education = computed(() => experiencesData.education)
const work = computed(() => experiencesData.work)
const localizedProjects = computed(() => {
  return portfolioStore.projects.map(project => ({
    ...project,
    title: project.title[locale.value] || project.title.en,
    description: project.description[locale.value] || project.description.en,
    image: `/images/${project.image}`
  }))
})

onMounted(() => {
  portfolioStore.fetchProjects()
})

// Toast state
const showToast = ref(false)
const toastTimeout = ref(null)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('briann2305@gmail.com')
    showToast.value = true
    console.log('Toast should show:', showToast.value) // Debug log
    
    // Clear any existing timeout
    if (toastTimeout.value) {
      clearTimeout(toastTimeout.value)
    }
    
    // Hide toast after 3 seconds
    toastTimeout.value = setTimeout(() => {
      showToast.value = false
    }, 3000)
  } catch (err) {
    console.error('Failed to copy email:', err)
  }
}

// Clean up toast timeout on unmount
onBeforeUnmount(() => {
  if (toastTimeout.value) {
    clearTimeout(toastTimeout.value)
  }
})

</script>
  
<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-down {
  animation: slideInDown 0.5s ease-out forwards;
  opacity: 0;
}

@media (max-width: 768px) {
  .animate-slide-in,
  .animate-slide-in-down {
    animation: none;
    opacity: 1;
  }
}

canvas {
  cursor: grab;
}

canvas:active {
  cursor: grabbing;
}

.animated-button {
  padding: 6px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: bold;
}

.github-button {
  background-color: var(--accent-hover);
  color: white;
}

.demo-button {
  background-color: var(--accent);
  color: white;
}

.animated-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out;
}

@media (max-width: 1023px) {
  canvas {
    aspect-ratio: 1 / 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

/* Ensure toast is always on top */
.fixed {
  z-index: 9999;
}
</style>
