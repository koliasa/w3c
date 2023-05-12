/**
 * Debug
 */
const gui = new dat.GUI({ closed: false, width: 340 });
const bigWavesFolder = gui.addFolder("Large Waves");
const smallWavesFolder = gui.addFolder("Small Waves");
const colorFolder = gui.addFolder("Colors");
const debugObject = {
  waveDepthColor: "#cad100",
  waveSurfaceColor: "#002588",
  fogNear: 1,
  fogFar: 3,
  fogColor: "#0b0092" };


/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(
debugObject.fogColor,
debugObject.fogNear,
debugObject.fogFar);

scene.background = new THREE.Color(debugObject.fogColor);

/**
 * Object
 */
const waterGeometry = new THREE.PlaneGeometry(12, 12, 512, 512);

// Material
const waterMaterial = new THREE.ShaderMaterial({
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent,
  transparent: true,
  fog: true,
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2() },
    uBigWavesElevation: { value: 0.254 },
    uBigWavesFrequency: { value: new THREE.Vector2(2.942, 1.691) },
    uBigWaveSpeed: { value: 0.39 },
    // Small Waves
    uSmallWavesElevation: { value: 0.207 },
    uSmallWavesFrequency: { value: 7.179 },
    uSmallWavesSpeed: { value: 0.13 },
    uSmallWavesIterations: { value: 2 },
    // Color
    uDepthColor: { value: new THREE.Color(debugObject.waveDepthColor) },
    uSurfaceColor: { value: new THREE.Color(debugObject.waveSurfaceColor) },
    uColorOffset: { value: 0.1497 },
    uColorMultiplier: { value: 4.808 },

    // Fog, contains fogColor, fogDensity, fogFar and fogNear
    ...THREE.UniformsLib["fog"] } });



const water = new THREE.Mesh(waterGeometry, waterMaterial);
water.rotation.x = -Math.PI * 0.5;
scene.add(water);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight };


window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */

// Base camera
const camera = new THREE.PerspectiveCamera(
75,
sizes.width / sizes.height,
0.1,
100);

camera.position.set(1, 1, 1);
scene.add(camera);

// Controls
const controls = new THREE.OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas });

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));



/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Update time
  waterMaterial.uniforms.uTime.value = elapsedTime;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();