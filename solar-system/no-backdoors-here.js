function runCodeWithBackDoors(fn) {
  try {
    fn?.();

    if (document.body.classList.contains("hide-UI")) {
      showError({
        message:
          "Try to find a function <br> to show the solar system and call it",
      });
    }
  } catch (error) {
    showError(error);
  }
}

function showError({ message }) {
  const errorContainer = document.querySelector(".error-container");
  const solarSystem = document.querySelector(".solar-system-container");

  solarSystem.style.display = "none";

  if (message === "Definitely no error here!") {
    errorContainer.innerHTML =
      "ERROR! <br> <span style='margin-top: 50px; display: block'>Search for the issue and <br> save the planets!</span>";
  } else {
    errorContainer.innerHTML = message;
  }

  errorContainer.style.textAlign = "center";
  errorContainer.style.display = "flex";
  errorContainer.style.flexDirection = "column";
  errorContainer.style.justifyContent = "center";
  errorContainer.style.alignItems = "center";
  errorContainer.style.color = "red";
  errorContainer.style.height = "100vh";
  errorContainer.style.fontSize = "70px";
}

const init = function () {
  body.classList.remove("view-3D", "opening");
  body.classList.add("view-2D");
};

const setView = function (...view) {
  universe.className = "";
  universe.classList.add(...view);
};
