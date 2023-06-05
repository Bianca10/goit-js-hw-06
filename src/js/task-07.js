const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");
//console.log(fontSizeControl);
//console.log(textSpan);

fontSizeControl.addEventListener("input", function () {
  const fontSize = fontSizeControl.value;
  textSpan.style.fontSize = `${fontSize}px`;
});
