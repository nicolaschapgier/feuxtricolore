var lightRedButton = document.getElementById("lightRedButton");
var lightOrangeButton = document.getElementById("lightOrangeButton");
var lightGreenButton = document.getElementById("lightGreenButton");
var blackColor = "#000000";
var redLight = "#FF0000";
var orangeLight = "#ffa500";
var greenLight = "#008000";
var whiteBorder = "1px solid white";
var redFire = document.getElementById("redFire");
var orangeFire = document.getElementById("orangeFire");
var greenFire = document.getElementById("greenFire");

const toggle = (value) => {
  getDefaultColor();

  return value === "red"
    ? print(orangeFire, greenFire)
    : value === "orange"
    ? print(redFire, greenFire)
    : print(redFire, orangeFire);
};

const print = (firstColorToChange, secondColorToChange) => {
  firstColorToChange.style.backgroundColor = "#000000";
  firstColorToChange.style.border = "#000000";
  secondColorToChange.style.backgroundColor = "#000000";
  secondColorToChange.style.border = "#000000";
};

const getDefaultColor = () => {
  redFire.style.backgroundColor = redLight;
  orangeFire.style.backgroundColor = orangeLight;
  greenFire.style.backgroundColor = greenLight;
  redFire.style.border = whiteBorder;
  orangeFire.style.border = whiteBorder;
  greenFire.style.border = whiteBorder;
};

lightRedButton.addEventListener("click", () => {
  toggle("red");
});

lightOrangeButton.addEventListener("click", () => {
  toggle("orange");
});

lightGreenButton.addEventListener("click", () => {
  toggle("green");
});

normalboutton.addEventListener("click", () => {
  getDefaultColor();
});
