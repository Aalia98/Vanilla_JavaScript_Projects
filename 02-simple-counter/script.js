const num = document.getElementById("num")


const decrease = document.getElementById("decrease")
decrease.addEventListener("click", function() {
    num.innerHTML = parseInt(num.innerHTML) - 1
    changeColor()
})

const reset = document.getElementById("reset")
reset.addEventListener("click", function(){
    num.innerHTML = "0"
    changeColor()
})

const increase = document.getElementById("increase")
increase.addEventListener("click", function() {
    num.innerHTML = parseInt(num.innerHTML) + 1
    changeColor()
})

function changeColor() {
    if(parseInt(num.innerHTML) > 0){
        num.style.color = "green"
    } else if(parseInt(num.innerHTML) < 0) {
        num.style.color = "red"
    } else if(parseInt(num.innerHTML) == 0) {
        num.style.color = "#212121"
    }
}

