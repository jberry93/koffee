$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".parallax").parallax();
  $("ul.tabs").tabs();
  $(".modal-trigger").leanModal({
    dismissible: true,
    opacity: .3,
    in_duration: 50,
    out_duration: 50
  });
});