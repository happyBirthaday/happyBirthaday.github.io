
$(document).ready(function(){
    $("#panda-img").fadeTo(4000, 0, showImageNow);
});

function showImageNow() {
  $("#panda-img").css("display", "none");
  $(".center-items-cus").css("display", "flex");
  $(".center-items-cus").css("visibility", "visible");
  $(".paw, .section-heading").fadeTo(4000, 1);
  $("canvas").fadeTo(4000, 100);
};
