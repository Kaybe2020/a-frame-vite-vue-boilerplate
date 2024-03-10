<script setup>
  import { ref, onMounted } from 'vue';
  import '../aframe/clickable.js';
  import PortalTeleporter from './PortalTeleporter.vue';
  import "../aframe/japan-scene.js";
  import "../aframe/bind-position.js";
  import "../aframe/bind-rotation.js";



  let activeColor= '';
  let activeColorBrush = ref('');


  // function paint(id, nodeMatch = "Columna") {
  //   console.log("Paint");
  //   const el = document.getElementById(id);
  //   el.object3D.traverse((node) => {                
  //       if (!node.isMesh) return;
  //       console.log(node);
  //       if (node.name.includes(nodeMatch)) {
  //         node.material.color = new THREE.Color(activeColor);
  //       }            
  //   })
  // }
 
  function paint(id, nodeMatch) {
    // console.log("Paint");
    const el = document.getElementById(id);
    el.object3D.traverse((node) => {                
        if (!node.isMesh) return;
        // console.log(node);
        switch(nodeMatch) {
            case "Columna":
            case "BaseDeco":
            case "Esfera":
            case "BarandaIn":
            case "SoporteBarandilla":
            case "Vigas" :
            case "PanelInf":
            case "PanelSup":
            case "Soporte_Soporte_0":

            case "Object_5":
            case "Object_4":

            case "Pedra_Lanterna":
            case "Madeira":
            
            case "Beard_Dragon_Body_0":
              if (node.name.includes(nodeMatch)) {
                  node.material.color = new THREE.Color(activeColor);
                }
              break;
            case "BarandaSubDerech":
              if (node.name.includes(nodeMatch)) {
                  node.material.color = new THREE.Color(activeColor);
              }
              if (node.name.includes("BarandiaSub")) {
                  node.material.color = new THREE.Color(activeColor);
              }
            break;
          case "BarandiaSub":
        if (node.name.includes(nodeMatch)) {
            node.material.color = new THREE.Color(activeColor);
        }
        if (node.name.includes("BarandaSubDerech")) {
            node.material.color = new THREE.Color(activeColor);
          }
        break;      
            default:
                break;
        }
    })
}

  function sendColor(evt){
    const el = evt.target;
    const color = el.dataset.color;
    activeColor = color;
    activeColorBrush.value = color;    
  }

  onMounted(() => {    
    const el = document.getElementById("color-palette");
    el.object3D.traverse((node) => {                
        if (!node.isMesh) return;
        node.material.color = new THREE.Color("red");
    });
  })
</script>

<template>
  <a-entity
    gltf-model="#JapaneseScene"
    position="0 0.01 12.35"
    sound="src: #music; autoplay: true; loop: true; distanceModel:linear; volume: 0.5"
  ></a-entity>

  <a-entity
  id="dragon"
  gltf-model="#yokkai"
  position="57.320 92.658 -119.78"
  rotation="0 -135 0"
  scale="1 1 1"
  ></a-entity>

  <!-- PONT ------------------------------------------------------------------------------------------------------------------------------------------------------------>
  <a-entity
    id="pont-entity"    
    gltf-model="#pont"
    position="-25 0 61"
    scale =".05 .02 .06"
    rotation="0 105 0"
    >
      <a-box  @click="evt => paint('pont-entity', 'Columna')" clickable color="red" visible="false" height="1.5" scale="15 48 15" position="-19.5 23 15"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'Columna')" clickable color="red" visible="false" height="1.5" scale="15 48 15" position="121 23 15"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'Columna')" clickable color="red" visible="false" height="1.5" scale="15 48 15" position="-19.5 23 -201"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'Columna')" clickable color="red" visible="false" height="1.5" scale="15 48 15" position="121 23 -201"></a-box>

      <a-box  @click="evt => paint('pont-entity', 'BaseDeco')" clickable color="green" visible="false" height="1.5" scale="13 6 12.5" position="-19 63 15.5"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'BaseDeco')" clickable color="green" visible="false" height="1.5" scale="13 6 12.5" position="121 63 15.5"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'BaseDeco')" clickable color="green" visible="false" height="1.5" scale="13 6 12.5" position="-19 63 -200.8"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'BaseDeco')" clickable color="green" visible="false" height="1.5" scale="13 6 12.5" position="121.5 63 -200.8"></a-box>

      <a-sphere  @click="evt => paint('pont-entity', 'Esfera')" clickable color="yellow" visible="false" height="1.5" radius="5" position="-19 70 15.5"/>
      <a-sphere  @click="evt => paint('pont-entity', 'Esfera')" clickable color="yellow" visible="false" height="1.5" radius="5" position="121 70 15.5"/>
      <a-sphere  @click="evt => paint('pont-entity', 'Esfera')" clickable color="yellow" visible="false" height="1.5" radius="5" position="-19 70 -200.8"/>
      <a-sphere  @click="evt => paint('pont-entity', 'Esfera')" clickable color="yellow" visible="false" height="1.5" radius="5" position="121.5 70 -200.8"/>

      <a-box  @click="evt => paint('pont-entity', 'BarandaIn')" clickable color="blue" visible="false" height="1.5" scale="13 11 200" position="-19 30 -93"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'BarandaIn')" clickable color="blue" visible="false" height="1.5" scale="13 11 200" position="121 30 -93"></a-box>

      <a-box  @click="evt => paint('pont-entity', 'BarandiaSub')" clickable color="orange" visible="false" height="1.5" scale="14.2 11 200" position="-19.6 55 -93"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'BarandaSubDerech')" clickable color="orange" visible="false" height="1.5" scale="14.2 11 200" position="121.5 56 -93"></a-box>

      <a-box  @click="evt => paint('pont-entity', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="-19.5 25 -39"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="-19.8 27 -95"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="-19.5 25 -150"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="121.5 25 -39"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="121.5 27 -95"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="121.5 25 -150"></a-box>
        
      <a-box  @click="evt => paint('pont-entity', 'PanelSup')" clickable color="brown" visible="false" height="1.5" scale="159 7 238" position="50 5 -90"></a-box>
      
      <a-box  @click="evt => paint('pont-entity', 'PanelInf')" clickable color="pink" visible="false" height="1.5" scale="159 15 234" position="50 -12 -95"></a-box>

      <a-box @click="evt => paint('pont-entity',  'Soporte_Soporte_0')" clickable color="white" visible="false" height="1.5" scale="10 10 10" position="-28 -16 -96"></a-box>
      <a-box @click="evt => paint('pont-entity',  'Soporte_Soporte_0')" clickable color="white" visible="false" height="1.5" scale="10 10 10" position="130.5 -16 -96"></a-box>

      <a-box  @click="evt => paint('pont-entity', 'Vigas')" clickable color="black" visible="false" height="1.5" scale="20 75 20" position="-15 -55 -95"></a-box>
      <a-box  @click="evt => paint('pont-entity', 'Vigas')" clickable color="black" visible="false" height="1.5" scale="20 75 20" position="110 -55 -95"></a-box>
  </a-entity>
 
  <a-entity
    id="pont-entity2"    
    gltf-model="#pont"
    position="34 -1 -17"
    scale =".02 .02 .035"
    rotation="0 90 0"
    >
      <a-box  @click="evt => paint('pont-entity2', 'Columna')" clickable color="red" visible="false" height="1.5" scale="15 48 15" position="-19.5 23 15"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'Columna')" clickable color="red" visible="false" height="1.5" scale="15 48 15" position="121 23 15"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'Columna')" clickable color="red" visible="false" height="1.5" scale="15 48 15" position="-19.5 23 -201"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'Columna')" clickable color="red" visible="false" height="1.5" scale="15 48 15" position="121 23 -201"></a-box>

      <a-box  @click="evt => paint('pont-entity2', 'BaseDeco')" clickable color="green" visible="false" height="1.5" scale="13 6 12.5" position="-19 63 15.5"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'BaseDeco')" clickable color="green" visible="false" height="1.5" scale="13 6 12.5" position="121 63 15.5"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'BaseDeco')" clickable color="green" visible="false" height="1.5" scale="13 6 12.5" position="-19 63 -200.8"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'BaseDeco')" clickable color="green" visible="false" height="1.5" scale="13 6 12.5" position="121.5 63 -200.8"></a-box>

      <a-sphere  @click="evt => paint('pont-entity2', 'Esfera')" clickable color="yellow" visible="false" height="1.5" radius="5" position="-19 70 15.5"/>
      <a-sphere  @click="evt => paint('pont-entity2', 'Esfera')" clickable color="yellow" visible="false" height="1.5" radius="5" position="121 70 15.5"/>
      <a-sphere  @click="evt => paint('pont-entity2', 'Esfera')" clickable color="yellow" visible="false" height="1.5" radius="5" position="-19 70 -200.8"/>
      <a-sphere  @click="evt => paint('pont-entity2', 'Esfera')" clickable color="yellow" visible="false" height="1.5" radius="5" position="121.5 70 -200.8"/>

      <a-box  @click="evt => paint('pont-entity2', 'BarandaIn')" clickable color="blue" visible="false" height="1.5" scale="13 11 200" position="-19 30 -93"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'BarandaIn')" clickable color="blue" visible="false" height="1.5" scale="13 11 200" position="121 30 -93"></a-box>

      <a-box  @click="evt => paint('pont-entity2', 'BarandiaSub')" clickable color="orange" visible="false" height="1.5" scale="14.2 11 200" position="-19.6 55 -93"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'BarandaSubDerech')" clickable color="orange" visible="false" height="1.5" scale="14.2 11 200" position="121.5 56 -93"></a-box>

      <a-box  @click="evt => paint('pont-entity2', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="-19.5 25 -39"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="-19.8 27 -95"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="-19.5 25 -150"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="121.5 25 -39"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="121.5 27 -95"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'SoporteBarandilla')" clickable color="purple" visible="false" height="1.5" scale="13.7 40 7" position="121.5 25 -150"></a-box>
        
      <a-box  @click="evt => paint('pont-entity2', 'PanelSup')" clickable color="brown" visible="false" height="1.5" scale="159 7 238" position="50 5 -90"></a-box>
      
      <a-box  @click="evt => paint('pont-entity2', 'PanelInf')" clickable color="pink" visible="false" height="1.5" scale="159 15 234" position="50 -12 -95"></a-box>

      <a-box @click="evt => paint('pont-entity2',  'Soporte_Soporte_0')" clickable color="white" visible="false" height="1.5" scale="10 10 10" position="-28 -16 -96"></a-box>
      <a-box @click="evt => paint('pont-entity2',  'Soporte_Soporte_0')" clickable color="white" visible="false" height="1.5" scale="10 10 10" position="130.5 -16 -96"></a-box>

      <a-box  @click="evt => paint('pont-entity2', 'Vigas')" clickable color="black" visible="false" height="1.5" scale="20 75 20" position="-15 -55 -95"></a-box>
      <a-box  @click="evt => paint('pont-entity2', 'Vigas')" clickable color="black" visible="false" height="1.5" scale="20 75 20" position="110 -55 -95"></a-box>
  </a-entity>

  <!--TORI -------------------------------------------------------------------------------------------------------------------------------------------------------------->
  <a-entity
    id="tori-entity"
    gltf-model="#tori"
    position="-1 0 -32"
    scale="1.8 1.8 1.8"
    rotation="0 10 0"
  >
    <a-box @click="evt => paint('tori-entity', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="3.9 0.2 0.2" position="0 2.4 0"></a-box>
    <a-box @click="evt => paint('tori-entity', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="4.5 0.2 0.2" position="0 3 0"></a-box>
    <a-box @click="evt => paint('tori-entity', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.25 0.35 0.2" position="0 2.8 0"></a-box>
    <a-box @click="evt => paint('tori-entity', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="-1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="-1.2 1.7 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="1.2 1.7 0" rotation="0 0 10"></a-box>

    <a-box @click="evt => paint('tori-entity', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="5.05 0.33 0.3" position="0 3.35 0"></a-box>
    <a-box @click="evt => paint('tori-entity', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="-1.5 0.15 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="1.5 0.15 0" rotation="0 0 10"></a-box>
</a-entity>

<a-entity
    id="tori-entity1"
    gltf-model="#tori"
    position="-4.5 0 -50"
    scale="1.8 1.8 1.8"
    rotation="0 10 0"
  >
    <a-box @click="evt => paint('tori-entity1', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="3.9 0.2 0.2" position="0 2.4 0"></a-box>
    <a-box @click="evt => paint('tori-entity1', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="4.5 0.2 0.2" position="0 3 0"></a-box>
    <a-box @click="evt => paint('tori-entity1', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.25 0.35 0.2" position="0 2.8 0"></a-box>
    <a-box @click="evt => paint('tori-entity1', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity1', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="-1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity1', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="-1.2 1.7 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity1', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="1.2 1.7 0" rotation="0 0 10"></a-box>

    <a-box @click="evt => paint('tori-entity1', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="5.05 0.33 0.3" position="0 3.35 0"></a-box>
    <a-box @click="evt => paint('tori-entity1', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="-1.5 0.15 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity1', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="1.5 0.15 0" rotation="0 0 10"></a-box>
</a-entity>


<a-entity
    id="tori-entity2"
    gltf-model="#tori"
    position="-20 0 -66.3"
    scale="1.8 1.8 1.8"
    rotation="0 90 0"
  >
    <a-box @click="evt => paint('tori-entity2', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="3.9 0.2 0.2" position="0 2.4 0"></a-box>
    <a-box @click="evt => paint('tori-entity2', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="4.5 0.2 0.2" position="0 3 0"></a-box>
    <a-box @click="evt => paint('tori-entity2', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.25 0.35 0.2" position="0 2.8 0"></a-box>
    <a-box @click="evt => paint('tori-entity2', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity2', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="-1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity2', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="-1.2 1.7 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity2', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="1.2 1.7 0" rotation="0 0 10"></a-box>

    <a-box @click="evt => paint('tori-entity2', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="5.05 0.33 0.3" position="0 3.35 0"></a-box>
    <a-box @click="evt => paint('tori-entity2', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="-1.5 0.15 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity2', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="1.5 0.15 0" rotation="0 0 10"></a-box>
</a-entity>

<a-entity
    id="tori-entity3"
    gltf-model="#tori"
    position="-50 0 -66.3"
    scale="1.8 1.8 1.8"
    rotation="0 90 0"
  >
    <a-box @click="evt => paint('tori-entity3', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="3.9 0.2 0.2" position="0 2.4 0"></a-box>
    <a-box @click="evt => paint('tori-entity3', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="4.5 0.2 0.2" position="0 3 0"></a-box>
    <a-box @click="evt => paint('tori-entity3', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.25 0.35 0.2" position="0 2.8 0"></a-box>
    <a-box @click="evt => paint('tori-entity3', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity3', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="-1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity3', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="-1.2 1.7 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity3', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="1.2 1.7 0" rotation="0 0 10"></a-box>

    <a-box @click="evt => paint('tori-entity3', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="5.05 0.33 0.3" position="0 3.35 0"></a-box>
    <a-box @click="evt => paint('tori-entity3', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="-1.5 0.15 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity3', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="1.5 0.15 0" rotation="0 0 10"></a-box>
</a-entity>

<a-entity
    id="tori-entity4"
    gltf-model="#tori"
    position="-0.1 0 60"
    scale="1.8 1.8 1.8"
    rotation="0 0 0"
  >
    <a-box @click="evt => paint('tori-entity4', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="3.9 0.2 0.2" position="0 2.4 0"></a-box>
    <a-box @click="evt => paint('tori-entity4', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="4.5 0.2 0.2" position="0 3 0"></a-box>
    <a-box @click="evt => paint('tori-entity4', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.25 0.35 0.2" position="0 2.8 0"></a-box>
    <a-box @click="evt => paint('tori-entity4', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity4', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="-1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity4', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="-1.2 1.7 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity4', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="1.2 1.7 0" rotation="0 0 10"></a-box>

    <a-box @click="evt => paint('tori-entity4', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="5.05 0.33 0.3" position="0 3.35 0"></a-box>
    <a-box @click="evt => paint('tori-entity4', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="-1.5 0.15 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity4', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="1.5 0.15 0" rotation="0 0 10"></a-box>
</a-entity>

<a-entity
    id="tori-entity5"
    gltf-model="#tori"
    position="0 0 82"
    scale="1.8 1.8 1.8"
    rotation="0 0 0"
  >
    <a-box @click="evt => paint('tori-entity5', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="3.9 0.2 0.2" position="0 2.4 0"></a-box>
    <a-box @click="evt => paint('tori-entity5', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="4.5 0.2 0.2" position="0 3 0"></a-box>
    <a-box @click="evt => paint('tori-entity5', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.25 0.35 0.2" position="0 2.8 0"></a-box>
    <a-box @click="evt => paint('tori-entity5', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity5', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="-1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity5', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="-1.2 1.7 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity5', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="1.2 1.7 0" rotation="0 0 10"></a-box>

    <a-box @click="evt => paint('tori-entity5', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="5.05 0.33 0.3" position="0 3.35 0"></a-box>
    <a-box @click="evt => paint('tori-entity5', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="-1.5 0.15 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity5', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="1.5 0.15 0" rotation="0 0 10"></a-box>
</a-entity>

<a-entity
    id="tori-entity6"
    gltf-model="#tori"
    position="0 -5 128.6"
    scale="1.8 1.8 1.8"
    rotation="0 0 0"
  >
    <a-box @click="evt => paint('tori-entity6', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="3.9 0.2 0.2" position="0 2.4 0"></a-box>
    <a-box @click="evt => paint('tori-entity6', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="4.5 0.2 0.2" position="0 3 0"></a-box>
    <a-box @click="evt => paint('tori-entity6', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.25 0.35 0.2" position="0 2.8 0"></a-box>
    <a-box @click="evt => paint('tori-entity6', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity6', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.7 0.2 0.2" position="-1.05 2.5 0"></a-box>
    <a-box @click="evt => paint('tori-entity6', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="-1.2 1.7 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity6', 'Object_4')" clickable color="red" visible="false" height="1.5" scale="0.4 1.65 0.35" position="1.2 1.7 0" rotation="0 0 10"></a-box>

    <a-box @click="evt => paint('tori-entity6', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="5.05 0.33 0.3" position="0 3.35 0"></a-box>
    <a-box @click="evt => paint('tori-entity6', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="-1.5 0.15 0" rotation="0 0 -10"></a-box>
    <a-box @click="evt => paint('tori-entity6', 'Object_5')" clickable color="blue" visible="false" height="1.5" scale="0.55 0.45 0.55" position="1.5 0.15 0" rotation="0 0 10"></a-box>
</a-entity>

<!--LANTERNE------------------------------------------------------------------------------------------------------------------------------------------------------------->
<a-entity
id="lanterne-entity"
gltf-model="#lanterne"
position="12 0 -56"
scale="1 1 1"
>
  <a-sphere @click="evt => paint('lanterne-entity', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="1.7 1 1.7" position="0 0 0.13"></a-sphere>
  <a-box @click="evt => paint('lanterne-entity', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" scale="0.42 0.5 0.45" position="0 0.2 0.13"></a-box>
  <a-sphere @click="evt => paint('lanterne-entity', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="1.4 0.5 1.4" position="0.02 0.65 0.13"></a-sphere>
  <a-box @click="evt => paint('lanterne-entity', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" scale="0.34 0.35 0.34" position="0.03 0.8 0.13" rotation="0 -45 0"></a-box>
  <a-sphere @click="evt => paint('lanterne-entity', 'Pedra_Lanterna')" clickable color="yellow" phi-length="180" rotation="-90" visible="false" height="1.5" radius="0.2" scale="1.75 1.6 0.65" position="0 1.05 0.13"></a-sphere>
  <a-sphere @click="evt => paint('lanterne-entity', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="0.8 0.5 0.9" position="0.015 1.2 0.138"></a-sphere>
  
  <a-box @click="evt => paint('lanterne-entity', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="-0.03 0.9 0.17" rotation="0 -45 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="0.08 0.9 0.178" rotation="0 -45 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="-0.02 0.9 0.08" rotation="0 225 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="0.08 0.9 0.06" rotation="0 -225 0"></a-box>  
</a-entity>

<a-entity
id="lanterne-entity1"
gltf-model="#lanterne"
position="5.5 0 -48"
scale="1 1 1"
>
  <a-sphere @click="evt => paint('lanterne-entity1', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="1.7 1 1.7" position="0 0 0.13"></a-sphere>
  <a-box @click="evt => paint('lanterne-entity1', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" scale="0.42 0.5 0.45" position="0 0.2 0.13"></a-box>
  <a-sphere @click="evt => paint('lanterne-entity1', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="1.4 0.5 1.4" position="0.02 0.65 0.13"></a-sphere>
  <a-box @click="evt => paint('lanterne-entity1', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" scale="0.34 0.35 0.34" position="0.03 0.8 0.13" rotation="0 -45 0"></a-box>
  <a-sphere @click="evt => paint('lanterne-entity1', 'Pedra_Lanterna')" clickable color="yellow" phi-length="180" rotation="-90" visible="false" height="1.5" radius="0.2" scale="1.75 1.6 0.65" position="0 1.05 0.13"></a-sphere>
  <a-sphere @click="evt => paint('lanterne-entity1', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="0.8 0.5 0.9" position="0.015 1.2 0.138"></a-sphere>
 
  <a-box @click="evt => paint('lanterne-entity1', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="-0.03 0.9 0.17" rotation="0 -45 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity1', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="0.08 0.9 0.178" rotation="0 -45 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity1', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="-0.02 0.9 0.08" rotation="0 225 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity1', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="0.08 0.9 0.06" rotation="0 -225 0"></a-box>  
</a-entity>

<a-entity
id="lanterne-entity2"
gltf-model="#lanterne"
position="-9 -.1 100.75"
scale="1 1 1"
>
  <a-sphere @click="evt => paint('lanterne-entity2', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="1.7 1 1.7" position="0 0 0.13"></a-sphere>
  <a-box @click="evt => paint('lanterne-entity2', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" scale="0.42 0.5 0.45" position="0 0.2 0.13"></a-box>
  <a-sphere @click="evt => paint('lanterne-entity2', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="1.4 0.5 1.4" position="0.02 0.65 0.13"></a-sphere>
  <a-box @click="evt => paint('lanterne-entity2', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" scale="0.34 0.35 0.34" position="0.03 0.8 0.13" rotation="0 -45 0"></a-box>
  <a-sphere @click="evt => paint('lanterne-entity2', 'Pedra_Lanterna')" clickable color="yellow" phi-length="180" rotation="-90" visible="false" height="1.5" radius="0.2" scale="1.75 1.6 0.65" position="0 1.05 0.13"></a-sphere>
  <a-sphere @click="evt => paint('lanterne-entity2', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="0.8 0.5 0.9" position="0.015 1.2 0.138"></a-sphere>
 
  <a-box @click="evt => paint('lanterne-entity2', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="-0.03 0.9 0.17" rotation="0 -45 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity2', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="0.08 0.9 0.178" rotation="0 -45 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity2', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="-0.02 0.9 0.08" rotation="0 225 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity2', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="0.08 0.9 0.06" rotation="0 -225 0"></a-box>  
</a-entity>

<a-entity
id="lanterne-entity3"
gltf-model="#lanterne"
position="-13.77 -.1 25.4"
scale="1 1 1"
>
  <a-sphere @click="evt => paint('lanterne-entity3', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="1.7 1 1.7" position="0 0 0.13"></a-sphere>
  <a-box @click="evt => paint('lanterne-entity3', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" scale="0.42 0.5 0.45" position="0 0.2 0.13"></a-box>
  <a-sphere @click="evt => paint('lanterne-entity3', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="1.4 0.5 1.4" position="0.02 0.65 0.13"></a-sphere>
  <a-box @click="evt => paint('lanterne-entity3', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" scale="0.34 0.35 0.34" position="0.03 0.8 0.13" rotation="0 -45 0"></a-box>
  <a-sphere @click="evt => paint('lanterne-entity3', 'Pedra_Lanterna')" clickable color="yellow" phi-length="180" rotation="-90" visible="false" height="1.5" radius="0.2" scale="1.75 1.6 0.65" position="0 1.05 0.13"></a-sphere>
  <a-sphere @click="evt => paint('lanterne-entity3', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="0.8 0.5 0.9" position="0.015 1.2 0.138"></a-sphere>
 
  <a-box @click="evt => paint('lanterne-entity3', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="-0.03 0.9 0.17" rotation="0 -45 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity3', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="0.08 0.9 0.178" rotation="0 -45 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity3', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="-0.02 0.9 0.08" rotation="0 225 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity3', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="0.08 0.9 0.06" rotation="0 -225 0"></a-box>  
</a-entity>

<a-entity
id="lanterne-entity4"
gltf-model="#lanterne"
position="8.2 -.1 -3.1"
scale="1 1 1"
>
  <a-sphere @click="evt => paint('lanterne-entity4', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="1.7 1 1.7" position="0 0 0.13"></a-sphere>
  <a-box @click="evt => paint('lanterne-entity4', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" scale="0.42 0.5 0.45" position="0 0.2 0.13"></a-box>
  <a-sphere @click="evt => paint('lanterne-entity4', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="1.4 0.5 1.4" position="0.02 0.65 0.13"></a-sphere>
  <a-box @click="evt => paint('lanterne-entity4', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" scale="0.34 0.35 0.34" position="0.03 0.8 0.13" rotation="0 -45 0"></a-box>
  <a-sphere @click="evt => paint('lanterne-entity4', 'Pedra_Lanterna')" clickable color="yellow" phi-length="180" rotation="-90" visible="false" height="1.5" radius="0.2" scale="1.75 1.6 0.65" position="0 1.05 0.13"></a-sphere>
  <a-sphere @click="evt => paint('lanterne-entity4', 'Pedra_Lanterna')" clickable color="yellow" visible="false" height="1.5" radius="0.2" scale="0.8 0.5 0.9" position="0.015 1.2 0.138"></a-sphere>
 
  <a-box @click="evt => paint('lanterne-entity4', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="-0.03 0.9 0.17" rotation="0 -45 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity4', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="0.08 0.9 0.178" rotation="0 -45 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity4', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="-0.02 0.9 0.08" rotation="0 225 0"></a-box>
  <a-box @click="evt => paint('lanterne-entity4', 'Madeira')" clickable color="red" visible="false" height="1.5" scale="0.22 0.13 0.22" position="0.08 0.9 0.06" rotation="0 -225 0"></a-box>  
</a-entity>
   
   
  <!-- CONTROLER------------------------------------------------------------------------------------------------------------------------------------------------------->
  <a-entity
    bind-position="target: #hand-right"
    bind-rotation="target: #hand-right; convertToLocal: true;"
  >
    <a-entity
    id="brush"
    gltf-model="#pinceau"
    position = "0 .025 -.06"
    scale="2 2 2"
    rotation="-80 0 -15"
    >
    </a-entity>      
    <a-sphere 
    phi-length="180"
    position = "0.0015 .004 -0.210"
    rotation="-90 0 -180"
    :color="activeColorBrush"
    radius="0.010"
    >
    </a-sphere>
    <a-sphere 
    phi-length="180"
    position = ".0013 .008 -0.176"
    rotation="-90 0 -180"
    :color="activeColorBrush"
    radius="0.007"
    >
    </a-sphere>
    <a-sphere 
    phi-length="180"
    position = "0.0013 .01 -0.151"
    rotation="-90 0 -180"
    :color="activeColorBrush"
    radius="0.005"
    >
    </a-sphere>
  </a-entity>

  <!--enlever dummy- en VR-->
  <a-entity
    bind-position="target: #hand-left"
    bind-rotation="target: #hand-left; convertToLocal: true;"
    > 

    <!--Palette couleurs------------------------------------------------------------------------------------------------------------------------------------------------>
    <a-entity>
      <a-entity id="color-palette"
        gltf-model="#palette"
        position="-.05 0 -.3"      
        scale="0.05 0.02 0.05"
        rotation="0 -75 0"
        ></a-entity>
      <a-entity
        id="gamme-couleurs"
        position="-.05 0 -.3"
        >
        <!--noir-->
        <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position="-0.038 0 .352"
          rotation="-90 0 0"
          radius="0.030"
          color="#190000"
          data-color="#190000"
        ></a-sphere>
        <!--gris-->
        <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position="-.15 0 .260"
          rotation="-90 0 0"
          radius="0.03"
          color="#6a7181"
          data-color="#6a7181"
        ></a-sphere>
         <!--blanc-->
         <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position="-.034 0 .184"
          rotation="-90 0 0"
          radius="0.03"
          color="#fffffa"
          data-color="#fffffa"
        ></a-sphere>
        <!--brun-->
        <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position="-.22 0 .107"
          rotation="-90 0 0"
          radius="0.03"
          color="#92522a"
          data-color="#92522a"
        ></a-sphere>
        <!--vert foncé-->
        <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position="-.218 0 -.069"
          rotation="-90 0 0"
          radius="0.03"
          color="#006619"
          data-color="#006619"
        ></a-sphere>
        <!--vert clair-->
        <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position="-.145 0 -.23"
          rotation="-90 0 0"
          radius="0.03"
          color="#5aa31d"
          data-color="#5aa31d"
        ></a-sphere>
         <!--bleu clair-->
         <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position=".016 0 -.29"
          rotation="-90 0 0"
          radius="0.03"
          color="#55beff"
          data-color="#55beff"
        ></a-sphere>
      <!--bleu foncé-->
       <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position=".15 0 -.202"
          rotation="-90 0 0"
          radius="0.03"
          color="#13009b"
          data-color="#13009b"
        ></a-sphere>
        <!--violet-->
        <a-sphere
          clickable 
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position=".22 0 -.046"
          rotation="-90 0 0"
          radius="0.03"
          color="#9e00aa"
          data-color="#9e00aa"
        ></a-sphere>
        <!--rose-->
        <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position=".237 0 .14"
          rotation="-90 0 0"
          radius="0.03"
          color="#df9fc7"
          data-color="#df9fc7"
        ></a-sphere>
        <!--jaune-->
        <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position="-.090 0 .01"
          rotation="-90 0 0"
          radius="0.03"
          color="#ffea00"
          data-color="#ffea00"
        ></a-sphere>
        <!--orange-->
        <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position="0 0 -.121"
          rotation="-90 0 0"
          radius="0.03"
          color="#f9a241"
          data-color="#f9a241"
        ></a-sphere>
         <!--rouge-->
         <a-sphere
          clickable
          class="Palette"
          @click="evt => sendColor(evt)"
          phi-length="180"
          position=".051 0 .018"
          rotation="-90 0 0"
          radius="0.03"
          color="#ac0e0e"
          data-color="#ac0e0e"
        ></a-sphere>
      </a-entity>
    </a-entity>
  </a-entity>

  <!-- JapanScene navigation mesh ------------------------------------------------------------------------------------------------------------------------------------->
  <a-entity
    data-role="nav-mesh"
    geometry="primitive: plane; height: 25; width: 25"
    position="0 0 19.719"
    rotation="-90 0 0"
    scale="6.76 8.28 1"
    material="color: orange"
    visible="false"
  ></a-entity>
</template>