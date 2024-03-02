let mouseX = 0;
let mouseY = 0;
let darkmodeEnabled = false;

const flashlight = document.getElementById("flashlight");
const darkmodeSelector = document.getElementById("darkmode-selector");
const dwarves = document.getElementsByClassName("dwarves").item(0)

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function getMousePosition(e) {
  mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
  mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  flashlight.style.setProperty("--Xpos", mouseX + "px");
  flashlight.style.setProperty("--Ypos", mouseY + "px");
}


function toggleDarkmode() {
  darkmodeEnabled = !darkmodeEnabled;

  if (darkmodeEnabled) {
    flashlight.hidden = false;
    darkmodeSelector.innerHTML = "dark mode? off | [on]";
    dwarves.hidden = false;
  } else {
    flashlight.hidden = true;
    darkmodeSelector.innerHTML = "dark mode? [off] | on";
    dwarves.hidden = true;
  }
}


document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

darkmodeSelector.addEventListener("click", toggleDarkmode)