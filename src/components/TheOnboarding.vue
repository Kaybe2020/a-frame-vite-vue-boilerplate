<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>Save the colours in Izumo</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
      <section>
        <h4>Story</h4>
          <p>
            Izumo is a small, quiet village by the water. There is a peaceful and serene atmosphere there. As the king's painter,
             you like to walk there to regain your energy and soak up all the beauty of this landscape which inspires you a 
             lot during your creations.</p>
             <p>
             Unfortunately, one day, a yokkai found this little paradise and started eating the village's colors to increase its power.
             </p><p>
             The king was quickly informed and ordered you to go and restore the Izumo's colors. You're going there right away.
             </p><p>
             Equipped with your brush and your color palette, save your source of inspiration !
            </p>
        <h4>Aim</h4>
          <p>
            Restore colour to the grey or white elements indicated by the laser change (white to black). 
          </p>
          <p>Once you've completed your mission, just wander around aimlessly to find your inspiration, you've won.</p>
        <h4>Movement modes support</h4>
            <p>
            This game only works in VR mode.
            </p>
            <p> VR Headset – AR/VR walk + Teleport (Grip for grab and laser for
                click) + Gaze cursor for click
            </p>
      </section>
        <dl>
          <dt>This game was made by Karen Bonfils.</dt><br>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>
        
          <dt>
            <a href="https://soundcloud.com/sei_peridot" target="_blank">Sakuya2</a>
          </dt><dd>
            By Peritune under CC 4.0 BY International ( Royalty Free Music )
          </dd>
          <dt>
            <a href="https://sketchfab.com/3d-models/japon-low-d5d55b2dc1f848608b5772ad3cedaec9" target="_blank">Japón Low</a>
          </dt><dd>
            By PakitoHoe under CC BY 4.0 DEED
          </dd>
        
          <dt>
            <a href="https://sketchfab.com/3d-models/bridge-58ec347b2c65422d85071412fdb1a8de" target="_blank">Bridge</a>
          </dt><dd>
            By Arya under CC BY 4.0 DEED
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/japnese-torii-gate-42c716e1f0264afd8964c412049b2558" target="_blank">Japnese Torii gate</a>
          </dt><dd>
            By iPau under CC BY 4.0 DEED
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/japanese-stone-lantern-908a453743f34eddb27d5152ff3e2583" target="_blank">Japanese Stone Lantern</a>
          </dt><dd>
            By geoxstudio under CC BY 4.0 DEED
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/dragon-ver2-81c90e3d51674d8493804a28d1255493" target="_blank">Dragon Ver2</a>
          </dt><dd>
            By yuzutarou under CC BY-NC 4.0 DEED
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/cc0-paint-brush-3-5e38a7f8f1dd44cf859b23258c471445" target="_blank">CC0 - Paint Brush 3</a>
          </dt><dd>
            By plaggy under CC BY 4.0 DEED
          </dd>
          
          <dt>
            <a href="https://sketchfab.com/3d-models/color-palette-82e2019ab9754e208dadc9f0a23e7161" target="_blank">Color palette</a>
          </dt><dd>
            By Alberto under CC BY 4.0 DEED
          </dd>

         
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { 
    font-size: 1.5rem; 
    color:purple;
  }
  
  h4 {
    color:rgb(254, 206, 148);
  }
  a {
    color: white;
    text-decoration: none;
  }

  p {
    margin-bottom: 1rem;
    margin-left: 1rem;
  }

  .licences {
    margin: 2rem 0;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
    color:grey;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
    color:grey;
  }

  .licences dd a {
    color:grey;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(23, 22, 23);
    color: white;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    /* background-color: rgb(255, 146, 165); */
    background-color:purple;
    color: white;
    border: none;
    cursor: pointer;
  }

  #onboarding button:hover {
    background-color: rgb(101, 1, 101);
  }

  #onboarding ul {
    list-style-type: none;
  }

  #onboarding li {
  font-size: 1rem;
  text-align: left;
  margin-bottom: 0.5rem;
}
</style>
