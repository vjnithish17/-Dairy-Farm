// // Dashboard
// if (document.getElementById("morningMilk")) {
//     let milkRate = 50
//     let totalMilk = morning + evening;
//     let income = totalMilk * milkRate;
//     let profit = income - expense;

// }




let adminElement = document.getElementById("admin")
admin.addEventListener("click", () => {
    let userslist = JSON.parse(localStorage.getItem("userslist"))
    let admin = JSON.parse(localStorage.getItem("Admin"))

    admin.forEach((element) => {
        // console.log(element.Name);

        adminElement.innerHTML = `👤 ${element.Name}`;

    });


    console.log(admin);
})

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