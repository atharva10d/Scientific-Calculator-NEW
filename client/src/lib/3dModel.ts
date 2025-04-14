import * as THREE from 'three';

/**
 * Sets up a 3D model of the Casio FX-991ES Plus 2nd Edition calculator
 * @returns Object containing calculator and case groups
 */
export const setupCalculator3DModel = () => {
  // Create calculator body
  const calculatorGroup = new THREE.Group();
  
  // Create calculator case
  const caseGroup = new THREE.Group();
  
  // Set initial position
  calculatorGroup.position.set(0, 0, 0);
  caseGroup.position.set(0, 0, 0);
  
  // Create calculator body (main part)
  const bodyGeometry = new THREE.BoxGeometry(6, 12, 0.5);
  const bodyMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x333333,
    specular: 0x555555,
    shininess: 30
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  calculatorGroup.add(body);
  
  // Create calculator display
  const displayGeometry = new THREE.BoxGeometry(5, 2, 0.05);
  const displayMaterial = new THREE.MeshPhongMaterial({ 
    color: 0xe6f4f1,
    specular: 0xffffff,
    shininess: 20,
    transparent: true,
    opacity: 0.9
  });
  const display = new THREE.Mesh(displayGeometry, displayMaterial);
  display.position.set(0, 4, 0.3);
  calculatorGroup.add(display);
  
  // Create solar panel
  const solarPanelGeometry = new THREE.BoxGeometry(2, 0.4, 0.05);
  const solarPanelMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x222222,
    specular: 0x444444,
    shininess: 100
  });
  const solarPanel = new THREE.Mesh(solarPanelGeometry, solarPanelMaterial);
  solarPanel.position.set(1.5, 5, 0.3);
  calculatorGroup.add(solarPanel);
  
  // Create keyboard (simplified as one piece)
  const keyboardGeometry = new THREE.BoxGeometry(5.5, 6, 0.1);
  const keyboardMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x444444,
    specular: 0x666666,
    shininess: 10
  });
  const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
  keyboard.position.set(0, -2, 0.3);
  calculatorGroup.add(keyboard);
  
  // Create individual keys (simplified as small cubes)
  const createKey = (x: number, y: number, color: number = 0xe0e0e0) => {
    const keyGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.1);
    const keyMaterial = new THREE.MeshPhongMaterial({ 
      color,
      specular: 0xffffff,
      shininess: 30
    });
    const key = new THREE.Mesh(keyGeometry, keyMaterial);
    key.position.set(x, y, 0.4);
    calculatorGroup.add(key);
  };
  
  // Create key grid (5x7 grid)
  const keySpacing = 1;
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 5; col++) {
      // Position keys in a grid
      const x = (col - 2) * keySpacing;
      const y = (row - 6) * keySpacing;
      
      // Special colored keys
      let color = 0xe0e0e0; // default light gray
      
      // SHIFT key (yellow)
      if (row === 0 && col === 0) color = 0xffcc00;
      
      // ALPHA key (red)
      if (row === 0 && col === 1) color = 0xff3b30;
      
      // DEL/AC keys (green)
      if (row === 3 && (col === 3 || col === 4)) color = 0x34c759;
      
      createKey(x, y, color);
    }
  }
  
  // Create a simplified protective case
  const caseGeometry = new THREE.BoxGeometry(6.2, 12.2, 0.8);
  const caseMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x555555,
    specular: 0x777777,
    shininess: 10,
    transparent: true,
    opacity: 0.8
  });
  const caseBody = new THREE.Mesh(caseGeometry, caseMaterial);
  caseBody.position.set(0, 0, -0.2);
  caseGroup.add(caseBody);
  
  // Create text labels for the calculator (Casio logo)
  const createTextLabel = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    
    if (context) {
      context.fillStyle = 'white';
      context.font = 'Bold 40px Arial';
      context.fillText('CASIO', 10, 50);
      context.font = '20px Arial';
      context.fillText('fx-991ES PLUS', 10, 80);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true
    });
    
    const geometry = new THREE.PlaneGeometry(2, 1);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-1.5, 5, 0.3);
    
    return mesh;
  };
  
  // Add logo
  calculatorGroup.add(createTextLabel());
  
  return { calculatorGroup, caseGroup };
};

// Add hotspot markers to highlight features of the calculator
export const addHotspots = (scene: THREE.Scene) => {
  // Hotspot for solar panel
  const createHotspot = (position: THREE.Vector3, name: string) => {
    const geometry = new THREE.SphereGeometry(0.2, 16, 16);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x007aff,
      transparent: true,
      opacity: 0.7
    });
    const hotspot = new THREE.Mesh(geometry, material);
    hotspot.position.copy(position);
    hotspot.userData.name = name;
    
    return hotspot;
  };
  
  // Create hotspots for key features
  const solarPanelHotspot = createHotspot(new THREE.Vector3(1.5, 5, 0.5), "Solar Panel");
  const displayHotspot = createHotspot(new THREE.Vector3(0, 4, 0.5), "Display");
  const keyboardHotspot = createHotspot(new THREE.Vector3(0, -2, 0.5), "Keyboard");
  
  // Add hotspots to scene
  scene.add(solarPanelHotspot);
  scene.add(displayHotspot);
  scene.add(keyboardHotspot);
};
