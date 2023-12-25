const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");
const errMeassage = document.querySelectorAll(".errMeassage");
const ageYear = document.querySelectorAll(".Years");
const ageMonth = document.querySelectorAll(".Months");
const ageDay = document.querySelectorAll(".Days");


function showError(indexText){
    errMeassage[indexText].classList.add("errMessage");
    errMeassage[indexText].classList.remove("inactive");

}

function hideError(indexText){
    errMeassage[indexText].setAttribute("hidden", true);
}


console.log(btn);
btn.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log("Button is clicked")
    inputs.forEach((items,index)=>{
        if(items.value===""){
            showError(index)
        }
        else{
            hideError(index)
        }

    });




})





