<script setup>
  import PortalTeleporter from './PortalTeleporter.vue';
</script>

<template>
     <a-sphere radius="25" position="0 300.01 0" material="color: blue; side: back" fog="type: linear; color: #AAA" light="type: ambient; color: #BBB">

    <a-ocean color="#92E2E2" width="25" depth="25" density="15" speed="2"></a-ocean>
    
    <a-ocean color="#92E2E2" width="25" depth="25" density="8" speed="1"></a-ocean>
  
     </a-sphere>
  
<PortalTeleporter
    label="Back to main room"
    material="src: #room-physic-out-texture"
    position="0 301.01 12.35"
    rotation="0 180 0"
    :rot="90"
    :y="0.01"
    :z="-2.99"
    :x="-3"
/>

  <!-- Main room navigation mesh  -->
<!-- Life Cube room navigation mesh -->
<a-entity
    data-role="nav-mesh"
    geometry="primitive: plane; height: 25; width: 25"
    position="0 300.01 0"
    rotation="-90 0 0"
    material="color: green"
    visible="false"
  ></a-entity>

</template>