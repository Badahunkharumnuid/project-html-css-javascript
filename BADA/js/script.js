/*Name this external file gallery.js*/

function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = `url(${previewPic.src})`;
    document.getElementById("image").innerHTML = previewPic.alt;
   }

   function unDo(){

       const originalImageUrl = window.getComputedStyle(document.getElementById("image")).backgroundImage.match(/url\(['"']?([^'"]+)['"']?\)/)[1];
       const originalText = document.getElementById("image").innerHTML;
   
       document.getElementById("image").style.backgroundImage = `url()`;
       document.getElementById("image").innerHTML = originalText;
   }