(function ($) {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {

         new Zodiac('zodiac',                      // HTMLCanvasElement or id
            {                                      //// OPTIONS
               directionX: 0,                      // -1:left;0:random;1:right
               directionY: -1,                     // -1:up;0:random;1:down
               velocityX: [.1, .2],                // [minX,maxX]
               velocityY: [.5, 1],                 // [minY,maxY]
               bounceX: true,                      // bounce at left and right edge
               bounceY: false,                     // bounce at top and bottom edge
               parallax: .5,                       // float [0-1...]; 0: no paralax
               pivot: 0,                           // float [0-1...]; pivot level for parallax;
               density: 10000,                     // px^2 per node
               dotRadius: 5,                   // px value or [minR,maxR]
               dotColor: 'rgba(255,197,69,0.5)',
               linkColor: "rgba(99,99,99,0.2)",
               linkDistance: 50,
               linkWidth: 2
            });
      }, false);
}(jQuery));
