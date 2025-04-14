import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { setupCalculator3DModel } from "@/lib/3dModel";
import { useTheme } from "@/context/ThemeContext";

interface ThreeJSModelProps {
  showCase: boolean;
}

const ThreeJSModel: React.FC<ThreeJSModelProps> = ({ showCase }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const calculatorRef = useRef<THREE.Group | null>(null);
  const caseRef = useRef<THREE.Group | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(theme === 'dark' ? 0x1a1a1a : 0xf5f5f5);

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 15;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 8;
    controls.maxDistance = 25;

    // Create a simple placeholder calculator model
    const { calculatorGroup, caseGroup } = setupCalculator3DModel();
    calculatorRef.current = calculatorGroup;
    caseRef.current = caseGroup;
    
    scene.add(calculatorGroup);
    scene.add(caseGroup);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Create a reset button that can be triggered from outside
    const resetViewElement = document.createElement('button');
    resetViewElement.id = 'reset-view-trigger';
    resetViewElement.style.display = 'none';
    containerRef.current.appendChild(resetViewElement);
    
    resetViewElement.addEventListener('click', () => {
      if (controlsRef.current && cameraRef.current) {
        // Reset to default position
        cameraRef.current.position.set(0, 0, 15);
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.update();
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Clean up remaining elements
      const resetButton = document.getElementById('reset-view-trigger');
      if (resetButton && containerRef.current) {
        containerRef.current.removeChild(resetButton);
      }
      
      // Dispose resources
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [theme]);

  // Toggle case visibility
  useEffect(() => {
    if (caseRef.current) {
      caseRef.current.visible = showCase;
    }
  }, [showCase]);

  // Update scene background color on theme change
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.background = new THREE.Color(theme === 'dark' ? 0x1a1a1a : 0xf5f5f5);
    }
  }, [theme]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex items-center justify-center relative"
    >
      {/* Controls overlay */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button 
          className="view-control w-10 h-10 rounded-full flex items-center justify-center text-gray-800 dark:text-white bg-white/20 dark:bg-black/20 backdrop-blur-sm"
          onClick={() => {
            if (cameraRef.current) {
              cameraRef.current.position.z -= 1;
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button 
          className="view-control w-10 h-10 rounded-full flex items-center justify-center text-gray-800 dark:text-white bg-white/20 dark:bg-black/20 backdrop-blur-sm"
          onClick={() => {
            if (cameraRef.current) {
              cameraRef.current.position.z += 1;
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <button 
          className="view-control w-10 h-10 rounded-full flex items-center justify-center text-gray-800 dark:text-white bg-white/20 dark:bg-black/20 backdrop-blur-sm animate-spin"
          style={{ animationDuration: '8s' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ThreeJSModel;
