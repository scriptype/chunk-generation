var Generate = (function(_){

  var
    
    canvas        = document.getElementById("chunk"),
    chunk         = canvas.getContext('2d'),
    chunkWidth    = canvas.width,
    chunkHeight   = canvas.height,
    blockVolume   = 25,
    horizontal    = chunkWidth / blockVolume,
    vertical      = chunkHeight / blockVolume,
    matrixVolume  = horizontal * vertical,
    path          = "img/",
    x = y         = blockVolume*(-1),
    
    blocks        = [
      "surface",
      "dirt",
      "stone",
      "coal",
      "iron",
      "gold",
      "diamond",
      "lava"
    ],
    
    blockSource = function() {
      
      var source = {}
      for (var i=0; i < blocks.length; i++) {
        source[blocks[i]] = document.getElementById(blocks[i])
      }
      return source
      
    },
    
    generateLayer = function(options){
    
      var
        blockDensity = {},
        layer = [];
        
      for (var i=0; i < blocks.length; i++) {
        blockDensity[blocks[i]] = 0
      }
      
      for (var i in blockDensity) {
      
        blockDensity[i] = options[i] || 0
        
        for (var j=0; j<blockDensity[i]; j++) {
          layer.push(i)
        }
      
      }
      
      return layer;
      
    },
  
    layers = {
      surface: {
        blocks: generateLayer({
          surface   : 950,
          stone     : 40,
          coal      : 10,
        }),
        depth: 25
      },
      beneathSurface: {
        blocks: generateLayer({
          dirt      : 850,
          stone     : 125,
          coal      : 25,
        }),
        depth: 100
      },
      topMiddle: {
        blocks: generateLayer({
          dirt      : 500,
          stone     : 400,
          coal      : 90,
          iron      : 10,
        }),
        depth: 75
      },
      middle: {
        blocks: generateLayer({
          dirt      : 250,
          stone     : 600,
          coal      : 100,
          iron      : 35,
          lava      : 15
        }),
        depth: 125
      },
      deepMiddle: {
        blocks: generateLayer({
          dirt      : 70,
          stone     : 690,
          coal      : 120,
          iron      : 70,
          lava      : 50
        }),
        depth: 75
      },
      deep: {
        blocks: generateLayer({
          dirt      : 25,
          stone     : 475,
          coal      : 150,
          iron      : 100,
          gold      : 50,
          lava      : 200
        }),
        depth: 100
      },
      hell: {
        blocks: generateLayer({
          coal      : 200,
          iron      : 150,
          gold      : 45,
          diamond   : 5,
          lava      : 600
        }),
        depth: 100
      },
    };
    
    _(function(){
      for (var i in layers) {
    
        for (var j=0; j<matrixVolume / (chunkHeight / layers[i]["depth"]) ; j++) {
        
          var
            d         = Math.random() * (layers[i]["blocks"].length - 1),
            d         = Math.round(d),
            block     = layers[i]["blocks"][d];
            
          if (j % horizontal === 0) {
            y += blockVolume
            x =  blockVolume * (-1)
          }
          x+=blockVolume;
          
          chunk.drawImage(blockSource()[block], x, y)
        
        }
    
      }

    })
  
})($)