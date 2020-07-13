<template>
  <canvas style="border:1px solid #BBB;" ref="a_image" class="a-canvas"></canvas>
</template>

<script>
export default {
  name: "RandomImage",
  methods: {
    canvasImage: function() {
      let canvas = this.$refs.a_image;
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 400, 400);

      let options = {
        width: canvas.width,
        height: canvas.height,
        colorsBack: ["#a1b1d9", "#b6def2", "#d3d3d3"], //amarillo, azul, rojo
        colorsMain: [
          "#201c71", //Color logo
          "#123960", //Amarillo
          "#6e86bc", //Azul oscuro
          "#555281" //Naranja
        ],
        shapeDensity: 2,
        shapeSpread: 0.3
      };

      this.drawImage(ctx, options);
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    drawImage(ctx, settings) {
      var bgCol =
        settings.colorsBack[
          Math.floor(Math.random() * settings.colorsBack.length)
        ];
      ctx.fillStyle = bgCol;
      ctx.fillRect(0, 0, settings.width, settings.height);

      var _shapeFunctions = [this.__drawTriangle, this.__drawCircle];
      for (var i = 0, l = settings.shapeDensity; i < l; i++) {
        // get three random points on the canvas
        _shapeFunctions[this.getRandomInt(0, _shapeFunctions.length - 1)](
          ctx,
          settings
        );
      }
    },
    __drawTriangle(ctx, settings) {
      var pts = [];
      for (var j = 0; j < 3; j++) {
        var pX = this.getRandomInt(
          (-settings.width / 2) * settings.shapeSpread,
          settings.width + (settings.width / 2) * settings.shapeSpread
        );
        var pY = this.getRandomInt(
          (-settings.height / 2) * settings.shapeSpread,
          settings.height + (settings.height / 2) * settings.shapeSpread
        );
        pts[j] = { x: pX, y: pY };
      }

      // draw triangle
      ctx.fillStyle =
        settings.colorsMain[
          Math.floor(Math.random() * settings.colorsMain.length)
        ];
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      ctx.lineTo(pts[1].x, pts[1].y);
      ctx.lineTo(pts[2].x, pts[2].y);
      ctx.fill();
    },
    __drawCircle(ctx, settings) {
      // get circle coordinates and radius
      var pX = this.getRandomInt(0, settings.width);
      var pY = this.getRandomInt(0, settings.height);
      var pR = this.getRandomInt(1, Math.min(settings.width, settings.height));

      // draw circle
      ctx.fillStyle =
        settings.colorsMain[
          this.getRandomInt(0, settings.colorsMain.length - 1)
        ];
      ctx.beginPath();
      ctx.arc(pX, pY, pR, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }
  },
  mounted() {
    this.canvasImage();
  }
};
</script>

<style>
.a-canvas {
  min-height: 118px;
  max-height: 200px;
  border: 0 !important;
}
</style>