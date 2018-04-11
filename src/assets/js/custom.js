
$(document.body).on('click', ".menu-toggle", function () {
  $(this).closest('li').toggleClass("open");
});

/*
$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $(this).closest('li').toggleClass("open");
  });
});
*/
