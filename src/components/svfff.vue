<template>
    <div>

      <div style="position: relative;">
        <!-- <div id="svgcontainer"></div> -->
        <div style="position: absolute;top: 0;left: 0;">
          <svg id="ctr" width='500' height='500'>
            <!--<polyline points='220,10 300,210 170,250 123,234' fill='none' stroke='#000' stroke-width='10'></polyline>-->
            <polyline id="moreLine" points="" fill='none' stroke='#1269d3' stroke-width='5'></polyline>
            <polygon id="box" points='' fill='#607d8b' stroke='#000' stroke-width='5'></polygon>
          </svg>
        </div>
      </div>


    </div>
</template>

<script>
  // import '../js/imagetracer_v1.2.1.js'
    export default {
        name: "svfff",
      mounted(){
        // function asv(){
        ImageTracer.imageToSVG(
          'http://172.16.10.19:8080/static/sss.jpg',
          // 'https://images2015.cnblogs.com/blog/1016352/201703/1016352-20170313131540432-1942971531.png',
          function(svgstr){ ImageTracer.appendSVGString( svgstr, 'svgcontainer' ); },
          {numberofcolors: 256, scale:.8},
          'Curvy'
        );
        // }
        function asv() {
          return  $.ajax({
            type:'get',
            url:'',
            success:function(data){
              return 22222
            }
          })
        }

        function ff() {
          console.log(5555555);
          document.querySelector('#ctr').setAttribute('width',512);
          document.querySelector('#ctr').setAttribute('height',480);
          var pointsString = [];
          function move(e){
            var s = e.offsetX+'#'+e.offsetY;
            pointsString.push(s);
          }
          ctr.onmousedown = function (e) {
            console.log(e.button,662255);
            var p = '';
            if(e.button == 0){
              move(e);
              var str = pointsString.join(' ');
              p = str.replace(/#/g,',');
              window.strr = p;
              console.log(window.strr,778899);
              moreLine.setAttribute("points",p);
            }
            if(e.button == 2){
              console.log(window.strr,333333);
              box.setAttribute("points",window.strr);
              box.onmouseenter = function () {
                alert('划入了')
              };
              box.onmouseleave = function () {
                alert('划chu了')
              };
            }

          };
        }
        async function test() {
          let result1 = await asv();
          let result2 = await ff(result1);
        }

        test();
      }
    }
</script>

<style scoped>

</style>
