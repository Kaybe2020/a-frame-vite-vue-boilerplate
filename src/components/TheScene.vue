<script setup>
  import { ref } from 'vue';
  import TheCameraRig from './TheCameraRig.vue';
  import TheJapaneseScene from './TheJapaneseScene.vue';
   
  defineProps({
    scale: Number,
    overlaySelector: String,
  });
test
  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    background="color: #88bee7"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
    xr-mode-ui="XRMode: xr"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
    _fog="color: #88bee7; near: 4; far: 25"
    stats
  >

    <a-assets @loaded="allAssetsLoaded = true">
     <!--Title Youtube: Peritune - Sakuya2 (Musique libre japonaise)
                Source Youtube: https://www.youtube.com/watch?v=FPWT60d9JTQ&ab_channel=AuboutduFil-Musiquelibrededroit
                Titre:  Sakuya2
                Auteur: Peritune
                Source: https://soundcloud.com/sei_peridot ( sei_peridot )  
                Licence: https://creativecommons.org/licenses/...
                Téléchargement (5MB): https://auboutdufil.com/?id=579 -->
      <a-assets-item id="music" response-type="arraybuffer" src="assets/Peritune-Sakuya2.mp3" preload="auto"></a-assets-item>

      <!--
        Title: Japón Low
              Model source: https://sketchfab.com/3d-models/japon-low-d5d55b2dc1f848608b5772ad3cedaec9
              Model author: https://sketchfab.com/pakitohoe (PakitoHoe)
              Model license: CC BY 4.0 DEED ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="JapaneseScene" src="assets/japon_low.glb"></a-asset-item>
    
      <!--
        Title: Dragon Ver2
              Model source: https://sketchfab.com/3d-models/dragon-ver2-81c90e3d51674d8493804a28d1255493
              Model author: https://sketchfab.com/yuzuponponpon (yuzutarou)
              Model license: CC BY-NC 4.0 DEED ( https://creativecommons.org/licenses/by-nc/4.0/ )
      -->
      <a-asset-item id="yokkai" src="assets/dragon_ver2.glb"></a-asset-item>

      <!--
        Title: Bridge
              Model source: https://sketchfab.com/3d-models/bridge-58ec347b2c65422d85071412fdb1a8de
              Model author: https://sketchfab.com/Ana.Maria.Farbotko (Arya)
              Model license: CC BY 4.0 DEED ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="pont" src="assets/pont/scene.gltf"></a-asset-item>

      <!--
        Title: Japnese Torii gate
              Model source: https://sketchfab.com/3d-models/japnese-torii-gate-42c716e1f0264afd8964c412049b2558
              Model author: https://sketchfab.com/iPau (iPau)
              Model license: CC BY 4.0 DEED ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="tori" src="assets/tori/scene.gltf"></a-asset-item>

      <!--
        Title: Japanese Stone Lantern
              Model source: https://sketchfab.com/3d-models/japanese-stone-lantern-908a453743f34eddb27d5152ff3e2583
              Model author: https://sketchfab.com/geoxstudio (geoxstudio)
              Model license: CC BY 4.0 DEED ( https://creativecommons.org/licenses/by-nc/4.0/ )
      -->
      <a-asset-item id="lanterne" src="assets/lanterne/scene.gltf"></a-asset-item>

      <!--Title: CC0 - Paint Brush 3
              Model source: https://sketchfab.com/3d-models/cc0-paint-brush-3-5e38a7f8f1dd44cf859b23258c471445
              Model author: https://sketchfab.com/plaggy (plaggy)
              Model license: CC BY 4.0 DEED ( https://creativecommons.org/licenses/by-nc/4.0/ )
            -->
      <a-asset-item id="pinceau" src="assets/brush_white.glb"></a-asset-item>

      <!--Title: Color palette
              Model source: https://sketchfab.com/3d-models/color-palette-82e2019ab9754e208dadc9f0a23e7161
              Model author: https://sketchfab.com/onzoalberto (Alberto)
              Model license: CC BY 4.0 DEED ( https://creativecommons.org/licenses/by-nc/4.0/ )
            -->
      <a-asset-item id="palette" src="assets/color_palette.glb"></a-asset-item>
   </a-assets>
   
    <template v-if="allAssetsLoaded">
      <TheJapaneseScene :scale="scale" />
    </template>

    <TheCameraRig />
  
  </a-scene>
</template>