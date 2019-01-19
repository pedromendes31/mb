
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/6z7GQewK-Ks

var minSlidera=-2.0;
var maxSlidera=2;
var minSliderb=-1.5;
var maxSliderb=1.5;


function setup() {
  createCanvas(800, 600);
  pixelDensity(1);



  frDiv = createDiv('');
}

function draw() {
  var maxiterations = 300;





  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {

      var a = map(x, 0, width, minSlidera, maxSlidera);
      var b = map(y, 0, height, minSliderb, maxSliderb);

      var ca = a;
      var cb = b;

      var n = 0;

      while (n < maxiterations) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;
        if (a * a + b * b > 16) {
          break;
        }
        n++;
      }

      var bright = map(n, 0, maxiterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);


      if (n == maxiterations) {
        bright = 173;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  maxSlidera=maxSlidera-0.01
  maxSliderb=maxSliderb-0.007

  updatePixels();

}
