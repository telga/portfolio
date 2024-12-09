<template>
  <div class="min-h-screen bg-bg-primary text-text-primary px-2 pt-8 sm:pt-8">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
        <div class="animate-slide-in h-full" style="animation-delay: 100ms;">
          <div class="flex flex-col h-full items-center">
            <div class="w-full max-w-[500px] xl:max-w-none flex-grow aspect-[4/3] xl:aspect-[3/2] xl:h-[420px] overflow-hidden rounded-lg shadow-lg bg-bg-secondary relative transition-shadow duration-300 hover:shadow-xl">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-bg-secondary/10 pointer-events-none"></div>
              <canvas ref="threeCanvas" class="w-full h-full !min-h-full"></canvas>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="bg-bg-secondary rounded-lg shadow-lg p-6 animate-slide-in"
               style="animation-delay: 200ms;">
            <h3 class="text-3xl sm:text-4xl font-bold text-accent animate-slide-in mb-2"
                style="animation-delay: 0ms;">
              {{ $t('about.title') }}
            </h3>
            <h4 class="text-xl font-bold text-[var(--accent-secondary)] mb-4">
              {{ $t('about.about') }}
            </h4>
            <div class="bg-bg-primary p-4 rounded-lg shadow-md">
              <div class="space-y-6">
                <p v-for="(paragraph, index) in bioParagraphs" 
                   :key="index" 
                   class="text-text-secondary leading-relaxed animate-slide-in-down"
                   :style="{ animationDelay: `${300 + index * 100}ms` }">
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
          <div class="bg-bg-secondary rounded-lg shadow-lg p-4 lg:mt-12 xl:mt-12 animate-slide-in"
               style="animation-delay: 300ms;">
            <!-- Desktop view -->
            <div class="hidden md:flex flex-wrap justify-center items-center gap-4 text-accent">
              <template v-for="(link) in socialLinks" :key="link.name">
                <a v-if="link.name !== 'Email'"
                   :href="link.url"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="animated-button social-button px-3 py-2 rounded-md bg-[var(--bg-primary)] text-[var(--accent-secondary)] hover:text-[var(--accent-red)] transition-all duration-200">
                  {{ link.name }}
                </a>
                <button v-else
                        @click="copyEmail"
                        class="animated-button social-button px-3 py-2 rounded-md bg-[var(--bg-primary)] text-[var(--accent-secondary)] hover:text-[var(--accent-red)] transition-all duration-200">
                  Email
                </button>
              </template>
            </div>

            <!-- Mobile view -->
            <div class="md:hidden grid grid-cols-2 gap-3">
              <template v-for="link in socialLinks" :key="link.name">
                <a v-if="link.name !== 'Email'"
                   :href="link.url"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="animated-button social-button flex items-center justify-center py-3 rounded-lg bg-bg-primary text-[var(--accent-secondary)] active:bg-accent active:text-white transition-all duration-200">
                  {{ link.name }}
                </a>
                <button v-else
                        @click="copyEmail"
                        class="animated-button social-button flex items-center justify-center py-3 rounded-lg bg-bg-primary text-[var(--accent-secondary)] active:bg-accent active:text-white transition-all duration-200">
                  Email
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <!-- Projects and Experiences row -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <!-- Projects section -->
          <div id="projects" class="bg-bg-secondary rounded-lg shadow-lg p-6 animate-slide-in scroll-mt-[10px] md:scroll-mt-[10px]"
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
                <div class="relative">
                  <img :src="project.image" :alt="project.title" class="w-full h-36 object-cover">
                  <div class="absolute inset-0 bg-black/20"></div>
                </div>
                <div class="p-4 flex-grow flex flex-col">
                  <h3 class="text-lg font-bold mb-2 text-[var(--accent-secondary)]">{{ project.title }}</h3>
                  <p class="text-sm text-[var(--text-secondary)] mb-4 flex-grow">{{ project.description }}</p>
                  <div class="flex justify-between mt-auto">
                    <a :href="project.github" target="_blank" rel="noopener noreferrer" 
                       class="animated-button github-button text-sm hover:text-[var(--accent)]">
                      {{ $t('projects.github') }}
                    </a>
                    <a :href="project.demo" target="_blank" rel="noopener noreferrer" 
                       class="animated-button demo-button text-sm hover:text-[var(--accent-hover)]">
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
              <h3 class="text-lg font-bold text-[var(--accent-secondary)]">
                {{ $t(`experiences.education.items.${key}.degree`) }}
              </h3>
              <p class="text-[var(--accent-hover)]">
                {{ $t(`experiences.education.items.${key}.school`) }}, 
                {{ $t(`experiences.education.items.${key}.location`) }}
              </p>
              <p class="text-sm text-text-secondary">
                {{ $t(`experiences.education.items.${key}.duration`) }}
              </p>
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
              <h3 class="text-lg font-bold text-[var(--accent-secondary)]">
                {{ $t(`experiences.work.items.${key}.title`) }}
              </h3>
              <p class="text-[var(--accent-hover)]">
                {{ $t(`experiences.work.items.${key}.company`) }}, 
                {{ $t(`experiences.work.items.${key}.location`) }}
              </p>
              <p class="text-sm text-text-secondary">
                {{ $t(`experiences.work.items.${key}.duration`) }}
              </p>
              <ul class="mt-4 list-disc list-inside">
                <li v-for="respKey in Object.keys(job.responsibilities)" :key="respKey" 
                    class="text-sm mt-2 text-text-secondary animate-slide-in-right" 
                    :style="{ animationDelay: `${(key * 100) + (respKey * 50)}ms` }">
                  {{ $t(`experiences.work.items.${key}.responsibilities.${respKey}`) }}
                </li>
              </ul>
            </div>

            <!-- Skills section moved here -->
            <h2 class="text-2xl font-bold text-[var(--accent)] mb-4 mt-8">{{ $t('about.skills') }}</h2>
            <div class="bg-[var(--bg-primary)] p-4 rounded-md shadow-md animate-slide-in-right"
                 :style="{ animationDelay: '650ms' }">
              <ul class="flex flex-wrap gap-2">
                <li v-for="(skill, index) in skills" :key="skill" 
                    class="bg-[var(--bg-secondary)] text-[var(--accent-secondary)] px-4 py-2 rounded-md text-sm shadow animate-slide-in"
                    :style="{ animationDelay: `${700 + index * 50}ms` }">
                  {{ skill }}
                </li>
              </ul>
            </div>
          </div>
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
import { useToast } from 'vue-toastification'

const { t, locale } = useI18n()
const portfolioStore = usePortfolioStore()
const toast = useToast()

const skills = ref(['Vue.js', 'React.js', 'Node.js', 'HTML', 'CSS', 'Python', 'Java', 'JavaScript', 'WSL', 'SQL', 'Linux (Arch, Ubuntu)'])

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/telga' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/bnguy23' },
  { name: 'Instagram', url: 'https://instagram.com/br.ainn' },
  { name: 'VSCO', url: 'https://vsco.co/yyclown' },
  { name: 'Email', url: 'briann2305@gmail.com' }
]
  
const bioParagraphs = computed(() => {
  return t('about.bio').split('\n\n')
})

const threeCanvas = ref(null)
let scene, camera, renderer, controls, model
let resizeObserver = null
let animationFrameId = null
let updateModelPosition = null
let updateGroundPosition = null

let autoRotate = true
const normalRotationSpeed = 0.003 // Slower default rotation speed
let currentRotationSpeed = 0.2 // Start with fast rotation
const slowdownFactor = 0.95 // Controls how quickly it slows down
const minRotationSpeed = normalRotationSpeed // Target rotation speed

// Setup Three.js scene
const initThree = () => {
  // Scene setup
  scene = new THREE.Scene()
  
  // Camera setup first
  camera = new THREE.PerspectiveCamera(
    45,
    1,
    0.1,
    1000
  )

  // Define camera position update function
  const updateCameraPosition = () => {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      // XL breakpoint
      camera.position.set(0, 1.2, 2.4)
      camera.lookAt(0, 0, 0)
    } else if (window.matchMedia('(min-width: 1024px)').matches) {
      camera.position.set(0, 1.2, 2.4)  // Now matches XL camera position
      camera.lookAt(0, 0, 0)
    } else {
      // Mobile/tablet
      camera.position.set(0, 1.2, 2.4)
      camera.lookAt(0, 0, 0)
    }
    camera.updateProjectionMatrix()
  }

  // Initial camera setup
  updateCameraPosition()

  // Rest of your original initialization code...
  renderer = new THREE.WebGLRenderer({
    canvas: threeCanvas.value,
    antialias: true,
    alpha: true,
    precision: 'highp',
    powerPreference: 'high-performance',
  })
  // Enable shadow mapping
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setSize(256, 256)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Slightly less warm ambient light
  const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.2)  // Less warm white
  scene.add(ambientLight)
  
  // Main directional light - reduced warmth
  const mainLight = new THREE.DirectionalLight(0xffe8cc, 1.5)  // Less orange, more balanced
  mainLight.position.set(-1, 4, -1)
  mainLight.castShadow = true
  mainLight.shadow.mapSize.width = 2048
  mainLight.shadow.mapSize.height = 2048
  mainLight.shadow.camera.near = 0.1
  mainLight.shadow.camera.far = 10
  mainLight.shadow.bias = -0.0001
  mainLight.shadow.normalBias = 0.02
  mainLight.shadow.radius = 4
  scene.add(mainLight)

  // Fill light - reduced warmth
  const fillLight = new THREE.DirectionalLight(0xfff2e6, 0.8)  // More neutral warm
  fillLight.position.set(1, 3, 1)
  scene.add(fillLight)

  // Top light - very subtle warm tint
  const topLight = new THREE.DirectionalLight(0xfff6f0, 0.8)  // Almost neutral
  topLight.position.set(0, 6, 0)
  scene.add(topLight)

  // Adjust ground plane position
  const groundGeometry = new THREE.PlaneGeometry(10, 10)
  const groundMaterial = new THREE.ShadowMaterial({ 
    opacity: 0.3 
  })
  const ground = new THREE.Mesh(groundGeometry, groundMaterial)
  ground.rotation.x = -Math.PI / 2
  
  // Define the update function
  updateGroundPosition = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      ground.position.y = -0.2  // For desktop
    } else {
      ground.position.y = 0  // For mobile
    }
  }
  
  updateGroundPosition()
  ground.receiveShadow = true
  scene.add(ground)
  
  // Add resize listener for ground position
  window.addEventListener('resize', updateGroundPosition)

  // Load 3D Model with improved smoothing
  const loader = new GLTFLoader()
  loader.load(
    '/models/profile.gltf',
    (gltf) => {
      model = gltf.scene
      
      model.traverse((node) => {
        if (node.isMesh) {
          // Basic shadow settings
          node.castShadow = true
          node.receiveShadow = true
          
          if (node.material) {
            // Keep original material but ensure it's properly updated
            node.material.needsUpdate = true
            // Ensure textures are properly handled
            if (node.material.map) {
              node.material.map.needsUpdate = true
            }
          }
        }
      })

      scene.add(model)
      
      // Center the entire model using bounding box
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center) // Center the model at origin
      
      // Scale the model
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 1.0 / maxDim
      model.scale.multiplyScalar(scale)
      
      updateModelPosition = () => {
        model.position.set(0, 0, 0)
        model.updateMatrix()
        
        if (window.matchMedia('(min-width: 1280px)').matches) {
          // XL breakpoint - moved down by adjusting Y position
          model.position.set(0, -0.2, 0)
        } else if (window.matchMedia('(min-width: 1024px)').matches) {
          // LG breakpoint - moved down by adjusting Y position
          model.position.set(0, -0.2, 0)
        } else {
          // Mobile/tablet - keep original position
          model.position.set(0, 0, 0)
        }
        
        controls.target.set(0, 0, 0)
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
  // Clear hash from URL on page load/refresh
  if (window.location.hash) {
    window.history.pushState('', '/', window.location.pathname)
  }
  
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
  window.removeEventListener('resize', updateGroundPosition)
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
    toast.success('Email copied to clipboard!', {
      toastClassName: 'site-toast',
      containerClassName: 'site-toast-container',
      position: "bottom-right",
      timeout: 2000,
      hideProgressBar: true
    })
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
  background-color: var(--bg-secondary);
  color: var(--accent-hover);
}

.demo-button {
  background-color: var(--bg-secondary);
  color: var(--accent);
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

/* Add these new styles */
.social-button {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.social-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
