const getColor = () -> {
    // hex code
    const randomNumber=Math.random()
    console.log(randomNumber);
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)