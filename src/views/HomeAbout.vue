<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8 lg:p-12">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-bold text-accent mb-8 sm:mb-12 animate-slide-in text-center"
          style="animation-delay: 0ms;">
        {{ $t('about.title') }}
      </h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div class="lg:col-span-5 animate-slide-in" style="animation-delay: 100ms;">
          <div class="flex flex-col items-center">
            <div class="w-full aspect-square overflow-hidden rounded-lg shadow-lg bg-bg-secondary relative transition-shadow duration-300 hover:shadow-xl">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-bg-secondary/10 pointer-events-none"></div>
              <canvas ref="threeCanvas" class="w-full h-full"></canvas>
            </div>
            
            <!-- Social links with better sizing -->
            <div class="bg-bg-secondary rounded-lg shadow-lg px-6 py-4 mt-6 inline-block mx-auto transition-shadow duration-300 hover:shadow-xl">
              <ul class="flex flex-wrap justify-center gap-4">
                <a v-for="(link, index) in socialLinks" 
                   :key="link.name" 
                   :href="link.url" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="text-accent hover:text-accent-hover transition-colors hover:scale-110 transform duration-200 animate-slide-in-bottom"
                   :style="{ animationDelay: `${index * 100}ms` }">
                  <component :is="link.icon" class="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <!-- Bio Card -->
          <div class="bg-bg-secondary rounded-lg shadow-lg p-6 mb-8 animate-slide-in"
               style="animation-delay: 200ms;">
            <h2 class="text-2xl font-bold text-accent mb-4">
              {{ $t('about.about') }}
            </h2>
            <div class="space-y-6">
              <p v-for="(paragraph, index) in bioParagraphs" :key="index" 
                 class="text-text-secondary leading-relaxed animate-slide-in-down"
                 :style="{ animationDelay: `${300 + index * 100}ms` }">
                {{ paragraph }}
              </p>
            </div>
          </div>

          <!-- Skills Card -->
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
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
//import profileImageSrc from '/public/images/userpic.png'
import { CodeBracketIcon, UserIcon, CameraIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  
const { t } = useI18n()
//const profileImage = ref(profileImageSrc)
const skills = ref(['Vue.js', 'React.js', 'Node.js', 'HTML', 'CSS', 'Python', 'Java', 'JavaScript', 'WSL', 'Linux (Arch, Ubuntu)'])

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/telga', icon: CodeBracketIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/bnguy23', icon: UserIcon },
  { name: 'Instagram', url: 'https://instagram.com/br.ainn', icon: CameraIcon },
  { name: 'Email', url: 'mailto:briann2305@gmail.com', icon: EnvelopeIcon },
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

      // Move model position down just a bit
      model.position.y = -0.8     // Adjusted from -1.0
      model.rotation.y = Math.PI
      currentRotationSpeed = 0.2

      // Update OrbitControls target
      controls.target.set(0, -0.4, 0)  // Adjusted from -0.8
      controls.update()
      controls.target.set(0, -0.8, 0)  // Adjusted target point
      // Update OrbitControls target to match new center
      controls.target.set(0, -0.4, 0)  // Adjusted from (0, -0.2, 0)
      controls.update()
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

// Update renderer sizing with additional checks
const updateRendererSize = () => {
  if (!threeCanvas.value || !renderer || !camera) return
  
  const container = threeCanvas.value.parentElement
  if (!container) return

  const size = container.clientWidth
  renderer.setSize(size, size)
  camera.aspect = 1
  camera.updateProjectionMatrix()
}

// Add resize handling
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
  })
})

onBeforeUnmount(() => {
  cleanup()
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
</style>
