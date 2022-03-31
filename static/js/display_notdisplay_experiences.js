let exp = document.querySelector("experience1")           
let detailsExp = document.getElementById("detaisexperience1")
cdetailsExp.style.display = "none"
exp.addEventListener("click", () => {
if(getComputedStyle(cdetailsExp).display != "none"){
    cdetailsExp.style.display = "none";
} else {
    cdetailsExp.style.display = "block";
}
}) 