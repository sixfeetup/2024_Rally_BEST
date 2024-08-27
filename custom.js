function logoVisibility(slide) {
  var bodyEl = document.getElementsByTagName("body")[0];
  var hideLogo = slide.classList.contains("no-logo");
  console.log({ hideLogo });
  if (hideLogo) {
    bodyEl.classList.add("no-logo");
  } else {
    bodyEl.classList.remove("no-logo");
  }
}

Reveal.on("ready", (event) => {
  logoVisibility(Reveal.getCurrentSlide());
});

Reveal.on("slidechanged", function (event) {
  logoVisibility(event.currentSlide);
});
