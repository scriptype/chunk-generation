var Generate = (function(_){

  var
  
    chunkWidth    = 1000,
    chunkHeight   = 600,
    blockVolume   = 25,
    horizontal    = chunkWidth / blockVolume,
    vertical      = chunkHeight / blockVolume,
    matrixVolume  = horizontal * vertical,
    canvas        = document.getElementById("chunk"),
    chunk         = canvas.getContext('2d'),
    path          = "img/",
    x = y         = blockVolume*(-1);
    
    generateBlock = function(blockType){
    
      var block = new Image();
      block.src = path+blockType+".png";
      return block
    
    },
    
    generateLayer = function(options){
    
      var
      
        blockDensity = {
          surface   : 0,
          dirt      : 0,
          stone     : 0,
          coal      : 0,
          iron      : 0,
          gold      : 0,
          diamond   : 0,
          lava      : 0
        },
        
        layer = [];
      
      
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
          dirt      : 750,
          stone     : 200,
          coal      : 50,
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
          stone     : 45,
          coal      : 250,
          iron      : 200,
          gold      : 100,
          diamond   : 5,
          lava      : 400
        }),
        depth: 100
      },
    };
	
    for (var i in layers) {
    
      layers[i]["dom"] = _("#"+i)
    
      for (var j=0; j<matrixVolume / (chunkHeight / layers[i]["depth"]) ; j++) {
      
        var
          d         = Math.random() * (layers[i]["blocks"].length - 1),
          d         = Math.round(d),
          block     = layers[i]["blocks"][d],
          element   = layers[i]["dom"];
          
        if (j % horizontal === 0) {
          y += blockVolume
          x =  blockVolume * (-1)
				}
        x+=blockVolume;
        
        chunk.drawImage(generateBlock(block), x, y)
      
      }
    
    }
  
})($)