var Generate = (function(_){
  
  var
    resolution    = 24,
    reSquare      = Math.pow(resolution, 2),
    blocks        = ["surface","dirt","stone","coal","iron","gold","diamond","lava"],
//    createLayer   = function(options) {
 //   
  //    var
 //       params = {
  //        range       : options.range,
  //        blocks      : options.blocks,
  //        randomity   : options.randomity || 64,
   //       density     : []
   //     };
        
   //     for (var i=0; i<params.range.length; i++) {
        
   //       params["range"+i] = params.range[i];
        
   //     };
        
    //    for (var i=0; i<params.randomity; i++) {
          
    //      var
     //       d = Math.random()*params.randomity,
    //        d = Math.round(d);
          
    //      if (d>=params["range"+i]) {
    //        params.density.push(params.blocks[i])
    //      }
          
    //    }
        
    //    console.log(params.density)
    //    return params.density
    
  //  },
    layers        = {
      surface: {
        density:[
          0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,
          1,1,1,1,1,1,1,1,
          1,1,1,1,2,2,2,3,
        ],
        //createLayer({
         // range   : [54,60,64],
         // blocks  : [0,1,2]
        //}),
        dom: _("#surface")
      },
      beneathSurface: {
        density:[
          1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,
          2,2,2,2,2,2,2,2,
          2,2,2,2,3,3,3,3,
        ],
       //createLayer({
        //  range   : [54,60,64],
         // blocks  : [1,2,3]
        //}),
        dom: _("#beneathSurface")
      },
      topMiddle: {
        density: [
          1,1,1,1,1,1,1,1,
          1,1,1,1,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          3,3,3,3,3,3,3,3,
          3,3,3,3,4,4,4,4,
        ],
        dom: _("#topMiddle")
      },
      middle: {
        density: [
          1,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,3,3,3,3,
          3,3,3,3,3,3,3,3,
          4,4,4,4,4,4,4,4,
        ],
        dom: _("#middle")
      },
      deepMiddle: {
        density: [
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,3,3,3,3,
          3,3,3,3,3,3,3,3,
          3,3,3,3,4,4,4,4,
          4,4,4,4,4,4,4,5,
        ],
        dom: _("#deepMiddle")
      },
      deep: {
        density: [
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,3,3,3,3,
          3,3,3,3,3,3,3,3,
          3,3,3,3,4,4,4,4,
          4,4,4,4,5,5,7,7,
        ],
        dom: _("#deep")
      },
      hell: {
        density: [
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,2,2,2,2,2,
          2,2,2,3,3,3,3,3,
          3,3,3,3,3,4,4,4,
          4,4,4,4,5,5,5,6,
          7,7,7,7,7,7,7,7,
          7,7,7,7,7,7,7,7,
        ],
        dom: _("#hell")
      }
    };
    
  for (var i in layers) {
  
    var dom = layers[i].dom;
      
    for (var j=0; j<reSquare / 4.8; j++) {
  
      var
        d     = Math.random()*(layers[i].density.length-1),
        d     = Math.round(d),
        block = blocks[layers[i]["density"][d]];
      
      dom.append("<p class='"+block+"'></p>")
    
    }
    
  }
  
})($)