let mouseX = 0;
let mouseY = 0;
let darkmodeEnabled = false;

const flashlight = document.getElementById("flashlight");
const darkmodeSelector = document.getElementById("darkmode-selector");
const dwarves = document.getElementsByClassName("dwarves").item(0);
const lostDwarf = document.getElementsByClassName("lost-dwarf").item(0);

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

function getClickPosition(e) {
  flashlight.style.setProperty("--Xpos", e.pageX + "px");
  flashlight.style.setProperty("--Ypos", e.pageY + "px");
}

function toggleDarkmode() {
  darkmodeEnabled = !darkmodeEnabled;

  if (darkmodeEnabled) {
    flashlight.hidden = false;
    darkmodeSelector.innerHTML = "dark mode? off | [on]";
    dwarves.hidden = false;
    lostDwarf.hidden = false;
  } else {
    flashlight.hidden = true;
    darkmodeSelector.innerHTML = "dark mode? [off] | on";
    dwarves.hidden = true;
    lostDwarf.hidden = true;
  }
}

function dwarfPositionChanger() {
  let lostDwarfposition = 0;
  return () => {
    lostDwarfposition = (lostDwarfposition + 1) % 3;
    lostDwarf.className = `lost-dwarf-pos${lostDwarfposition}`;
  };
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

// an easier way for moving the flashlight on touch devices.
document.addEventListener("click", getClickPosition);

darkmodeSelector.addEventListener("click", toggleDarkmode);

const changeDwarfPosition = dwarfPositionChanger();
lostDwarf.addEventListener("mouseover", changeDwarfPosition);
lostDwarf.addEventListener("touchstart", changeDwarfPosition);
