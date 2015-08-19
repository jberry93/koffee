$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".parallax").parallax();
  $("ul.tabs").tabs();
  $(".modal-trigger").leanModal({
    dismissible: true,
    opacity: .3,
    in_duration: 200,
    out_duration: 200,
  });
  $(".datepicker").pickadate({
    selectMonths: true,
    selectYears: 15
  });
});