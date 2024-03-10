
AFRAME.registerComponent('japan-scene', {    
  
    schema: {
      activeColor: { type: "string", default: "#00ff00"},
      Color: { type:"color", default: "#1d1d1b"},
      SendColor: { type:"string", default: "##00ff33"}
    },
    init: function () {
        setTimeout(() => {
            this.el.object3D.traverse((node) => {
                
                if (!node.isMesh) return;

                node.el.addEventListener("click", () => {
                    console.log(node.el);
                    node.material.color = new THREE.Color(this.data.activeColor);
                    paint();

                });
                
            })
        }, 2000);
    }, 


    // getColor : function () {
    //     return this.el.object3D.getColor();
    // },

    paint: function(evt) {
        const el = evt.target;
        activeColor.value = el.getAttribute('color');
        el.color = activeColor.value
    },

    // sendColor: function(evt){
    //     const element = evt.target;
    //     element.getAtribute("color").value = this.data.activeColor
        
    //     }
});
