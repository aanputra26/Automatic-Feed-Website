$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  // Navbar
  if (wScroll > $(".about").offset().top - 660) {
    $("nav").css({
      backgroundColor: "white",
      boxShadow: "0px 1px 15px rgba(1,1,1,.5)",
    });
    $("nav a").css("color", "#1b63a6");
  } else {
    $("nav").css({
      // background: "transparent",
      boxShadow: "none",
    });
    $("nav a").css("color", "#1B63A6");
    $("nav a:hover").css("color", "#1b63a6");
  }
});

const container = document.querySelector(".gallery");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");


$(".page-scroll").click(function (event) {
  var tujuan = $(this).attr("href");
  var elemenTujuan = $(tujuan).offset().top;

  $("body, html").animate(
    {
      scrollTop: elemenTujuan,
    },
    1250,
    "swing"
  );

  event.preventDefault();
});
