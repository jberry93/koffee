$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".parallax").parallax();
  $("ul.tabs").tabs();
  $(".modal-trigger").leanModal({
    dismissible: true,
    opacity: .5,
    in_duration: 300,
    out_duration: 200,
  });
});