<template>
    <div class="min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8 lg:p-12">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl font-bold text-accent mb-8 sm:mb-12 animate-fade-in-up text-center lg:text-left">{{ $t('about.title') }}</h1>
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div class="lg:w-1/3 animate-fade-in-up" style="animation-delay: 100ms;">
            <div class="flex flex-col items-center lg:items-start">
              <div class="w-64 h-64 overflow-hidden">
                <canvas ref="threeCanvas" class="w-full h-full"></canvas>
              </div>
              <ul class="flex flex-wrap justify-center gap-2 mt-4 w-48">
                <a v-for="(link, index) in socialLinks" 
                   :key="link.name" 
                   :href="link.url" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="text-accent hover:text-accent-hover transition-colors hover:scale-110 transform duration-200 animate-slide-in-bottom"
                   :style="{ animationDelay: `${index * 100}ms` }">
                  <component :is="link.icon" class="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </ul>
            </div>
            <h2 class="text-2xl font-bold text-accent mt-8 mb-4 text-center lg:text-left animate-fade-in-up" style="animation-delay: 200ms;">{{ $t('about.skills') }}</h2>
            <ul class="flex flex-wrap justify-center lg:justify-start gap-2">
              <li v-for="(skill, index) in skills" :key="skill" 
                  class="bg-bg-secondary text-text-primary px-3 py-1 rounded-full text-sm shadow animate-fade-in-up"
                  :style="{ animationDelay: `${300 + index * 25}ms` }">
                {{ skill }}
              </li>
            </ul>
          </div>
          <div class="lg:w-2/3">
            <div class="space-y-6">
              <p v-for="(paragraph, index) in bioParagraphs" :key="index" 
                 class="text-text-secondary leading-relaxed animate-fade-in-up"
                 :style="{ animationDelay: `${200 + index * 30}ms` }">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
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

  let autoRotate = true
  const normalRotationSpeed = 0.003 // Slower default rotation speed
  let currentRotationSpeed = 0.2 // Start with fast rotation
  const slowdownFactor = 0.95 // Controls how quickly it slows down
  const minRotationSpeed = normalRotationSpeed // Target rotation speed

  // Setup Three.js scene
  const initThree = () => {
    // Scene setup
    scene = new THREE.Scene()
    // Remove background color to make it transparent
    // scene.background = new THREE.Color(0x2A303C)
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(
      75,
      1,
      0.1,
      1000
    )
    // Position camera higher and further back
    camera.position.set(0, 1, 1)
    // Make camera look down at the center
    camera.lookAt(0, 0, 0)

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
        
        // Center and scale
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.sub(center)
        
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 2 / maxDim
        model.scale.multiplyScalar(scale)

        model.position.y = -0.5
        model.rotation.y = Math.PI
        currentRotationSpeed = 0.2
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error)
      }
    )

    // Add OrbitControls
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 1
    controls.maxDistance = 4
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
    requestAnimationFrame(animate)
    
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

  // Cleanup function
  const cleanup = () => {
    scene?.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose()
        object.material.dispose()
      }
    })
    renderer?.dispose()
    controls?.dispose()
  }

  onMounted(() => {
    initThree()
    animate()
  })

  onBeforeUnmount(() => {
    cleanup()
  })

  </script>
  
  <style scoped>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.3s ease-out forwards;
    opacity: 0;
  }

  canvas {
    cursor: grab;
  }

  canvas:active {
    cursor: grabbing;
  }
  </style>
