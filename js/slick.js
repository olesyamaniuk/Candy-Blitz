$(function () {
  $(".r-r-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".r-r-gallery-list-left",
    nextArrow: ".r-r-gallery-list-right",
  });
});
