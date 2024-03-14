
// alert("hey, pranav");

// function myFunction() {
//     document.querySelector("#one").style.backgroundColor = "red";
// }
// function mySecondFunction() {
//     document.querySelector("#two").style.backgroundColor = "blue";
// }
// function myThirdFunction() {
//     document.querySelector("#three").style.backgroundColor = "pink";
// }
// function myFourthFunction() {
//     document.querySelector("#four").style.backgroundColor = "yellow";
// }
// function myFifthFunction() {
//     document.querySelector("#five").style.backgroundColor = "white";
// }


document.querySelector("#one").addEventListener('click', () => {
    document.querySelector("#one").style.backgroundColor = "red";
})

document.querySelector("#two").addEventListener('click', () => {
    document.querySelector("#two").style.backgroundColor = "blue";
})

document.querySelector("#three").addEventListener('click', () => {
    document.querySelector("#three").style.backgroundColor = "pink";
})

document.querySelector("#four").addEventListener('click', () => {
    document.querySelector("#four").style.backgroundColor = "yellow";
})

document.querySelector("#five").addEventListener('click', () => {
    document.querySelector("#five").style.backgroundColor = "white";
})