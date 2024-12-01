<template>
  <div class="v2-page min-h-screen flex items-center justify-center p-4">
    <!-- Terminal Window -->
    <div class="bg-[var(--bg-secondary)] w-[900px] h-[600px] rounded-lg shadow-xl overflow-hidden border border-[var(--accent-hover)] border-opacity-50 hover:border-opacity-100 transition-all duration-300">
      <!-- Terminal Header -->
      <div class="bg-[var(--bg-primary)] p-3 flex items-center space-x-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <span class="text-[var(--text-secondary)] text-sm ml-2">portfolio@brian-nguyen</span>
      </div>
      
      <!-- Terminal Content -->
      <div class="p-6 font-mono text-sm h-[calc(100%-48px)] overflow-y-auto" @keydown.ctrl.l.prevent="clearTerminal" tabindex="0" ref="terminalContent">
        <div class="flex">
          <div class="text-[var(--accent-secondary)]">portfolio@brian-nguyen</div>
          <div class="text-[var(--text-primary)]"> ></div>
          <div class="text-[var(--text-primary)] ml-2">{{ currentCommand }}</div>
          <div 
            class="w-2 h-4 bg-[var(--text-primary)] animate-blink ml-1" 
            v-show="showCursor && !isExecuting"
          ></div>
        </div>

        <!-- Terminal Output -->
        <div v-if="terminalOutput" class="mt-4 whitespace-pre-line text-[var(--text-primary)]">{{ terminalOutput }}</div>
        
        <!-- Neofetch Content -->
        <div v-if="showNeofetch" class="flex mt-4 gap-8">
          <!-- 3D canvas -->
          <div class="w-[45%] aspect-square overflow-hidden rounded-lg bg-bg-secondary relative">
            <canvas ref="threeCanvas" class="w-full h-full"></canvas>
          </div>
          
          <!-- System Info -->
          <div class="text-[var(--text-primary)] w-[55%] space-y-1">
            <div><span class="text-[var(--accent)]">Name: </span>Brian Nguyen</div>
            <div><span class="text-[var(--accent)]">Github: </span><a href="https://github.com/telga" target="_blank" class="hover:text-[var(--accent-hover)] transition-colors duration-300">telga (link)</a></div>
            <div>
              <span class="text-[var(--accent)]">Email: </span>
              <button 
                @click="copyEmail" 
                class="hover:text-[var(--accent-hover)] transition-colors duration-300"
              >briann2305@gmail.com (link)</button>
            </div>
            <div><span class="text-[var(--accent)]">LinkedIn: </span><a href="https://www.linkedin.com/in/bnguy23/" target="_blank" class="hover:text-[var(--accent-hover)] transition-colors duration-300">bnguy23 (link)</a></div>
            <div class="flex">
              <span class="text-[var(--accent)]">Skills: </span>
              <span class="text-[var(--accent-secondary)] ml-1">Vue.js, React.js, Node.js, HTML, CSS, Python, Java, JavaScript, WSL, Linux (Arch, Ubuntu)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const threeCanvas = ref(null)
const terminalContent = ref(null)
const currentCommand = ref('ifetch')
const showNeofetch = ref(true)
const showCursor = ref(true)
const isExecuting = ref(true)
const terminalOutput = ref('')

let scene, camera, renderer, controls, model
let resizeObserver = null
let animationFrameId = null

let autoRotate = true
const normalRotationSpeed = 0.003
let currentRotationSpeed = 0.2
const slowdownFactor = 0.95
const minRotationSpeed = normalRotationSpeed

const handleKeyPress = (e) => {
  if (isExecuting.value) {
    if (e.ctrlKey && e.key.toLowerCase() === 'l') {
      e.preventDefault()
      clearTerminal()
    }
    return
  }

  if (e.ctrlKey && e.key.toLowerCase() === 'l') {
    e.preventDefault()
    clearTerminal()
    return
  }

  if (e.key === 'Enter') {
    isExecuting.value = true
    if (currentCommand.value === 'ifetch') {
      showNeofetch.value = true
      terminalOutput.value = ''
      nextTick(() => {
        initThree()
        animate()
      })
    } else if (currentCommand.value === 'help') {
      showNeofetch.value = false
      terminalOutput.value = `Available commands: ifetch Display system information and 3D model help Show this help message clear Clear the terminal (Ctrl+L) Type a command and press Enter to execute`
    }
  } else if (e.key === 'Backspace') {
    currentCommand.value = currentCommand.value.slice(0, -1)
  } else if (e.key.length === 1 && !e.ctrlKey) {
    currentCommand.value += e.key
  }
}

const clearTerminal = () => {
  currentCommand.value = ''
  showNeofetch.value = false
  terminalOutput.value = ''
  isExecuting.value = false
  cleanup()
  terminalContent.value?.focus()
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('briann2305@gmail.com')
    const originalOutput = terminalOutput.value
    terminalOutput.value = 'Email copied to clipboard!'
    setTimeout(() => {
      terminalOutput.value = originalOutput
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email')
  }
}

const initThree = () => {
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
  camera.position.set(0, 0, 2.8)
  camera.lookAt(0, -0.3, 0)

  renderer = new THREE.WebGLRenderer({
    canvas: threeCanvas.value,
    antialias: true,
    alpha: true,
    precision: 'highp',
    powerPreference: 'high-performance',
  })
  renderer.setSize(256, 256)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
  scene.add(ambientLight)
  
  const mainLight = new THREE.DirectionalLight(0xffffff, 1.5)
  mainLight.position.set(2, 2, 1)
  scene.add(mainLight)

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.8)
  fillLight.position.set(-2, 0, -2)
  scene.add(fillLight)

  const topLight = new THREE.DirectionalLight(0xffffff, 0.8)
  topLight.position.set(0, 5, 0)
  scene.add(topLight)

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
            node.material.roughness = 0.9
            node.material.metalness = 0.1
            node.material.envMapIntensity = 0.5
          }
        }
      })

      scene.add(model)
      
      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)
      
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = 1.5 / maxDim
      model.scale.multiplyScalar(scale)

      model.position.y = -0.8
      model.rotation.y = Math.PI
      currentRotationSpeed = 0.2

      controls.target.set(0, -0.4, 0)
      controls.update()
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error)
    }
  )

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.minDistance = 1
  controls.maxDistance = 3
  controls.enablePan = false
  controls.autoRotate = true
  controls.autoRotateSpeed = 2

  controls.addEventListener('start', () => {
    autoRotate = false
    controls.autoRotate = false
  })
}

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

const updateRendererSize = () => {
  if (!threeCanvas.value || !renderer || !camera) return
  
  const container = threeCanvas.value.parentElement
  if (!container) return

  const size = container.clientWidth
  renderer.setSize(size, size)
  camera.aspect = 1
  camera.updateProjectionMatrix()
}

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

  terminalContent.value?.addEventListener('keydown', handleKeyPress)
  terminalContent.value?.focus()
})

onBeforeUnmount(() => {
  cleanup()
  terminalContent.value?.removeEventListener('keydown', handleKeyPress)
})
</script>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

.v2-page {
  background-color: var(--bg-primary) !important;
}

:root,
html,
body {
  background-color: var(--bg-primary) !important;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

canvas {
  cursor: grab;
}

canvas:active {
  cursor: grabbing;
}
</style> 