// code trouver sur : https://www.vantajs.com/
window.addEventListener("DOMContentLoaded", () => {
  VANTA.FOG({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: 0xe4e9ff,
    midtoneColor: 0x4d34d1,
    lowlightColor: 0x7a66db,
    baseColor: 0xa0a51,
    blurFactor: 0.83,
    speed: 3.3,
    zoom: 0.5,
  });
  setTimeout(() => {
    const main = document.querySelector("main");
    main.style.opacity = 1;
    main.style.filter = "blur(0px)";
  }, 1000);
});
