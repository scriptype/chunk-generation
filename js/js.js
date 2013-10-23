var Generate = (function(_){

  var
  
    chunkWidth    = 1000,
    chunkHeight   = 600,
    blockVolume   = 25,
    matrixVolume  =
      (chunkWidth / blockVolume) *
      (chunkHeight / blockVolume),
    grid          = _("#grid"),
    
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
      
        blockDensity[i] = options[i]
        
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
          dirt      : 0,
          stone     : 40,
          coal      : 10,
          iron      : 0,
          gold      : 0,
          diamond   : 0,
          lava      : 0
        }),
        depth: 25
      },
      beneathSurface: {
        blocks: generateLayer({
          surface   : 0,
          dirt      : 750,
          stone     : 200,
          coal      : 50,
          iron      : 0,
          gold      : 0,
          diamond   : 0,
          lava      : 0
        }),
        depth: 100
      },
      topMiddle: {
        blocks: generateLayer({
          surface   : 0,
          dirt      : 500,
          stone     : 400,
          coal      : 90,
          iron      : 10,
          gold      : 0,
          diamond   : 0,
          lava      : 0
        }),
        depth: 75
      },
      middle: {
        blocks: generateLayer({
          surface   : 0,
          dirt      : 250,
          stone     : 600,
          coal      : 100,
          iron      : 35,
          gold      : 0,
          diamond   : 0,
          lava      : 15
        }),
        depth: 125
      },
      deepMiddle: {
        blocks: generateLayer({
          surface   : 0,
          dirt      : 70,
          stone     : 690,
          coal      : 120,
          iron      : 70,
          gold      : 0,
          diamond   : 0,
          lava      : 50
        }),
        depth: 75
      },
      deep: {
        blocks: generateLayer({
          surface   : 0,
          dirt      : 25,
          stone     : 475,
          coal      : 150,
          iron      : 100,
          gold      : 50,
          diamond   : 0,
          lava      : 200
        }),
        depth: 100
      },
      hell: {
        blocks: generateLayer({
          surface   : 0,
          dirt      : 0,
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
    
    grid.css({
      width : chunkWidth,
      height: chunkHeight
    })
    
    for (var i in layers) {
    
      layers[i]["dom"] = _("#"+i)
    
      for (var j=0; j<matrixVolume / (chunkHeight / layers[i]["depth"]) ; j++) {
      
        var
          d       = Math.random()*999,
          d       = Math.round(d),
          block   = layers[i]["blocks"][d],
          element = layers[i]["dom"];
        
        element.append("<p class='"+block+"'></p>")
      
      }
    
    }
    
    console.log(_(".diamond").length)
  
  //var
  //  resolution    = 24,
  //  reSquare      = Math.pow(resolution, 2),
    //blocks        = ["surface","dirt","stone","coal","iron","gold","diamond","lava"],
    //createLayer   = function(options) {
    
    //  var
    //    params = {
    //      range       : options.range,
    //      blocks      : options.blocks,
    //      randomity   : options.randomity || 64,
    //      density     : []
    //    };
        
    //    for (var i=0; i<params.range.length; i++) {
        
    //      params["range"+i] = params.range[i];
        
    //    };
        
    //    for (var i=0; i<params.randomity; i++) {
          
    //      var
    //        d = Math.random()*params.randomity,
    //        d = Math.round(d);
          
    //      if (d>=params["range"+i]) {
    //        params.density.push(params.blocks[i])
    //      }
          
    //    }
        
    //    console.log(params.density)
    //    return params.density
    
    //},
  //  layers        = {
  //    surface: {
  //      density:[
  //        0,0,0,0,0,0,0,0,
  //        0,0,0,0,0,0,0,0,
  //        0,0,0,0,0,0,0,0,
  //        0,0,0,0,0,0,0,0,
  //        0,0,0,0,0,0,0,0,
  //        0,0,0,0,0,0,0,0,
  //        1,1,1,1,1,1,1,1,
  //        1,1,1,1,2,2,2,3,
  //      ],
        //createLayer({
         // range   : [54,60,64],
         // blocks  : [0,1,2]
        //}),
  //      dom: _("#surface")
  //    },
  //    beneathSurface: {
  //      density:[
  //        1,1,1,1,1,1,1,1,
  //        1,1,1,1,1,1,1,1,
  //        1,1,1,1,1,1,1,1,
  //        1,1,1,1,1,1,1,1,
  //        1,1,1,1,1,1,1,1,
  //        1,1,1,1,1,1,1,1,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,3,3,3,3,
  //      ],
       //createLayer({
       //   range   : [54,60,64],
       //   blocks  : [1,2,3]
       // }),
  //      dom: _("#beneathSurface")
  //    },
  //    topMiddle: {
  //      density: [
  //        1,1,1,1,1,1,1,1,
  //        1,1,1,1,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        3,3,3,3,3,3,3,3,
  //        3,3,3,3,4,4,4,4,
  //      ],
  //      dom: _("#topMiddle")
  //    },
  //    middle: {
  //      density: [
  //        1,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,3,3,3,3,
  //        3,3,3,3,3,3,3,3,
  //        4,4,4,4,4,4,4,4,
  //      ],
  //      dom: _("#middle")
  //    },
  //    deepMiddle: {
  //      density: [
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,3,3,3,3,
  //        3,3,3,3,3,3,3,3,
  //        3,3,3,3,4,4,4,4,
  //        4,4,4,4,4,4,4,5,
  //      ],
  //      dom: _("#deepMiddle")
  //    },
  //    deep: {
  //      density: [
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,3,3,3,3,
  //        3,3,3,3,3,3,3,3,
  //        3,3,3,3,4,4,4,4,
  //        4,4,4,4,5,5,7,7,
  //      ],
  //      dom: _("#deep")
  //    },
  //    hell: {
  //      density: [
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,2,2,2,2,2,
  //        2,2,2,3,3,3,3,3,
  //        3,3,3,3,3,4,4,4,
  //        4,4,4,4,5,5,5,6,
  //        7,7,7,7,7,7,7,7,
  //        7,7,7,7,7,7,7,7,
  //      ],
  //      dom: _("#hell")
  //    }
  //  };
    
  //for (var i in layers) {
  
  //  var dom = layers[i].dom;
      
  //  for (var j=0; j<reSquare / 4.8; j++) {
  
  //    var
  //      d     = Math.random()*(layers[i].density.length-1),
  //      d     = Math.round(d),
  //      block = blocks[layers[i]["density"][d]];
      
  //    dom.append("<p class='"+block+"'></p>")
    
  //  }
    
  //}
  
})($)