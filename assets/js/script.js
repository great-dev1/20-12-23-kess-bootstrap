// AOS Animation
AOS.init();

// Play Video
$(document).ready(function () {
  $(".play-btn").click(function () {
    $(this).hide();
    $(".video").css({"visibility": "visible"});
  });
});