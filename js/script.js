$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

// //add active-nav class on click4
let myNav = document.querySelectorAll("nav ul li");
let clickSound = document.getElementById("audio4");
myNav.forEach((ele) => {
  ele.addEventListener("click", () => {
    clickSound.play();
  });
});

// About click
let aboutClick = document.getElementById("aboutClick");
aboutClick.addEventListener("click", () => {
  document.getElementById("audio1").play();
});
