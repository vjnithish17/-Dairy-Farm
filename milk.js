// // Dashboard
// if (document.getElementById("morningMilk")) {
//     let milkRate = 50
//     let totalMilk = morning + evening;
//     let income = totalMilk * milkRate;
//     let profit = income - expense;

// }






// Clock----------------------------------------
let updateTime = () => {

    let date = new Date();

    let localtimes = document.getElementById("clock");

    localtimes.innerHTML = date.toLocaleTimeString();
}
setInterval(updateTime, 1000);

updateTime();

// btn
let btn = document.getElementById("modeBtn")
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.classList.toggle("bg-dark")
    console.log(btn);

})