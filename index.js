(function ($) {
    "use strict"; // Start of use strict
  
    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $(".sidebar .collapse").collapse("hide");
      }
    });
  
    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function () {
      if ($(window).width() < 768) {
        $(".sidebar .collapse").collapse("hide");
      }
  
      // Toggle the side navigation when window is resized below 480px
      if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $(".sidebar .collapse").collapse("hide");
      }
    });
  
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $("body.fixed-nav .sidebar").on(
      "mousewheel DOMMouseScroll wheel",
      function (e) {
        if ($(window).width() > 768) {
          var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        }
      }
    );
  
    // Scroll to top button appear
    $(document).on("scroll", function () {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    });
  
    // Smooth scrolling using jQuery easing
    $(document).on("click", "a.scroll-to-top", function (e) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1000,
          "easeInOutExpo"
        );
      e.preventDefault();
    });
  })(jQuery); // End of use strict
  
  var button = document.getElementById("toggle");
  button.addEventListener("click", () => {
    var id = document.getElementById("sidebar-wrapper");
    id === null
      ? (id = document.getElementById("sidebar-wrapper-closed"))
      : (id = document.getElementById("sidebar-wrapper"));
    console.log(id);
    if (id.id === "sidebar-wrapper") {
      id.style.width = "0px";
      id.id = "sidebar-wrapper-closed";
    } else {
      id.style.width = "6.5rem";
      id.id = "sidebar-wrapper";
    }
  });
  