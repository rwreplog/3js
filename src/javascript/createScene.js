import * as THREE from "three";

export default function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xff0f0f0);
  return scene;
}
