// AOS Animation
AOS.init();

// Play Video
$(document).ready(function () {
  $(".play-btn").click(function () {
    $(this).hide();
    $(".video").css({"visibility": "visible"});
  });
});

var vid = document.getElementById("myVideo"); 

function playVideo() {
  vid.play(); 
} 