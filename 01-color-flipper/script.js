const colors = [
        "red",
        "rgb(161, 198, 167)",
        "blue",
        "rgb(163, 190, 125)",
        "green",
        "rgb(147, 34, 217)",
        "orange",
        "rgb(145, 250, 11)",
        "cyan",
        "rgb(211, 71, 173)",
        "yellow",
        "rgb(219, 182, 24)",
        "pink",
        "rgb(14, 136, 228)",
        "gray",
        "rgb(48, 116, 42)",
        "purple",
        "rgb(39, 151, 16)",
        "brown",
        "rgb(100, 56, 109)",
];

const randomHexColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const button = document.getElementById("btn")

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}

let randomValue;
const simple = document.getElementById("simple")
const simpleColorValue = simple.addEventListener("click", function(){
  randomValue = simpleColorValue;
  document.getElementsByTagName("title")[0].innerHTML = "Color Flipper || Simple";
})

const hexColor = document.getElementById("hex")
const hexColorValue = hexColor.addEventListener("click", function() {
  document.getElementsByTagName("title")[0].innerHTML = "Color Flipper || Hex";
  randomValue = randomHexColor()
})

button.addEventListener("click", function() {
  if(randomValue == simpleColorValue){
    const randomColor = getRandomNumber();
    document.body.style.backgroundColor = colors[randomColor];
    document.getElementById("randomColor").textContent = colors[randomColor];
  }else{
    document.body.style.backgroundColor = randomHexColor();
    document.getElementById("randomColor").textContent = randomHexColor();

  }

})