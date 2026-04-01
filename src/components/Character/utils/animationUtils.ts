import * as THREE from "three";
import { GLTF } from "three-stdlib";

const setAnimations = (gltf: GLTF) => {
  let character = gltf.scene;
  let mixer = new THREE.AnimationMixer(character);

  // Play first available animation if any exist
  if (gltf.animations && gltf.animations.length > 0) {
    const firstClip = gltf.animations[0];
    if (firstClip) {
      const action = mixer.clipAction(firstClip);
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.play();
    }
  }

  function startIntro() {
    if (gltf.animations && gltf.animations.length > 0) {
      const clip = gltf.animations[0];
      if (clip) {
        mixer.clipAction(clip).reset().play();
      }
    }
  }

  function hover(_gltf: GLTF, _hoverDiv: HTMLDivElement) {
    // No-op for Mixamo characters without brow bones
    return () => {};
  }

  return { mixer, startIntro, hover };
};

export default setAnimations;
