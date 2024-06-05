const body = document.querySelector("body"),
  universe = document.getElementById("universe"),
  solarsys = document.getElementById("solar-system");

runCodeWithBackDoors(() => {
  throw new Error("Definitely no error here!");

  $(window).load(() => {
    $("#toggle-data").click(function (e) {
      $(body).toggleClass("data-open data-close");
      e.preventDefault();
    });

    $("#toggle-controls").click(function (e) {
      $(body).toggleClass("controls-open controls-close");
      e.preventDefault();
    });

    $("#data a").click(function (e) {
      const ref = $(this).attr("class");
      $(solarsys).removeClass().addClass(ref);
      $(this).parent().find("a").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });

    $(".set-view").click(function () {
      $(body).toggleClass("view-3D view-2D");
    });

    $(".set-zoom").click(function () {
      $(body).toggleClass("zoom-large zoom-close");
    });

    $(".set-speed").click(function () {
      setView("scale-stretched", "set-speed");
    });

    $(".set-size").click(function () {
      setView("scale-s", "set-size");
    });

    $(".set-distance").click(function () {
      setView("scale-d", "set-distance");
    });

    init();
  });
});

// Be careful! The planets are big!
function showSolarSystem() {
  const solarSystem = document.querySelector(".solar-system-container");
  solarSystem.style.display = "block";

  const errorContainer = document.querySelector(".error-container");
  errorContainer.style.display = "none";

  console.log("Try to enter in GOD mode!");
}

// Playing with the planets might cause injuries. Be cautious!!
function enterGodMode() {
  body.classList.remove("hide-UI");
  body.classList.add("set-speed");

  body.classList.remove("view-2D");
  body.classList.add("view-3D");
}
