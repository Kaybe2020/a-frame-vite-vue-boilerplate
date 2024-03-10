<script setup>
  import '../aframe/teleport-camera-rig.js';
  import '../aframe/clickable.js';


  defineProps({
    label: {type: String, default: ''},
    x: {type: Number, default: 0},
    y: {type: Number, default: 0},
    z: {type: Number, default: 0},
    rot: {type: [Number, Boolean], default: false},
  });
</script>

<template>
  <!-- <a-entity
    geometry="primitive: circle; radius: 1"
    clickable
    :teleport-camera-rig="`
      x: ${x};
      y: ${y};
      z: ${z};
      handleRotation: ${rot === false ? 'false' : 'true'};
      rot: ${rot === false ? 0 : rot};
    `"
  >
    <a-text
      align="center"
      :value="label"
      position="0 1.2 0"
    ></a-text>
  </a-entity> -->
  <a-entity>
    <a-entity
    id="lampionl"
    gltf-model="#lampion"
    scale="0.005 0.005 0.005"
    position="0 0.5 0"
    animation="property: position; to: 0 0.2 0; loop:true; easing: easeInOutQuad; dur:1000; dir:alternate;"
    animation__2="property: rotation; to: 0 360 0; loop:true; easing: linear; dur:16000;" 
    ></a-entity>
    <a-box
      position="0 0.9 0"
      height="1.62"
      width="1.25"
      depth="1.1"
      visible="false"
      clickable
      :teleport-camera-rig="`
        x: ${x};
        y: ${y};
        z: ${z};
        handleRotation: ${rot === false ? 'false' : 'true'};
        rot: ${rot === false ? 0 : rot};
      `"
    ></a-box>
  </a-entity>
</template>