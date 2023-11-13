$(window).on("scroll", function () {
  AOS.init();
});

$(document).ready(function () {
  $(".FAQAnswers").hide();
  $(".TAXFAQ").hide();
  $(".1stQ .FAQAnswers").show();
  $(".1stQ .iconarrow").addClass("open");
  $(".t1stQ .FAQAnswers").show();
  $(".t1stQ .iconarrow").addClass("open");

  $(".queshead").click(function () {
    $(".FAQAnswers").hide();
    $(".iconarrow").removeClass("open");
    $(this).siblings(".FAQAnswers").show();
    $(this).find(".iconarrow").addClass("open");
  });

  $(".edibar").click(function () {
    if (!$(this).find("hr").hasClass("active")) {
      $(".FAQAnswers").hide();
      $(".EDIFAQ").show();
      $(".TAXFAQ").hide();
      $(".1stQ .FAQAnswers").show();
      $(".1stQ .iconarrow").addClass("open");
      $("hr").toggleClass("active");
    }
  });

  $(".taxbar").click(function () {
    if (!$(this).find("hr").hasClass("active")) {
      $(".FAQAnswers").hide();
      $(".TAXFAQ").show();
      $(".EDIFAQ").hide();
      $(".t1stQ .FAQAnswers").show();
      $(".t1stQ .iconarrow").addClass("open");
      $("hr").toggleClass("active");
    }
  });
  $(".switchContentContainer, .switchContentContainer2nd").hide();
  $(
    ".switchContentContainer.activeSwitchCont, .switchContentContainer2nd.activeSwitchCont"
  ).show();

  $(".switchSectionButton").click(function () {
    var targetContainer = $(this).attr("onclick").split("'")[1];
    $(".switchContentContainer, .switchContentContainer2nd").hide();
    $("." + targetContainer).show();
  });
});
