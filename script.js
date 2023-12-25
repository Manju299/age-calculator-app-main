const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");
const errMeassage = document.querySelectorAll(".errMeassage");
const ageYear = document.querySelectorAll(".Years");
const ageMonth = document.querySelectorAll(".Months");
const ageDay = document.querySelectorAll(".Days");


const date = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const bday = inputs[0];
const bmonth = inputs[1];
const byear = inputs[2];


function calculate(){
    let ageInYear 
    let ageInMonths;
    let ageInDays;

    if(currentMonth >= bmonth.value && currentDay  >= bday.value){
       ageInYear = currentYear-byear.value;
       ageInMonths = currentMonth-bmonth.value;
    }
    else{
        ageInYear--;
        if(currentDay < bday){
        ageInMonths = currentMonth - bmonth.value;
        ageInMonths = 12-ageInMonths;
        }

    }
    console.log(ageInYear +" years and months" +ageInMonths)

    return ageInYear,ageInMonths;

}




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
    console.log("Button is clicked");
    // console.log(currentDay-bday.value);
    // console.log(currentDay)
    console.log(byear.value);
    inputs.forEach((items,index)=>{
        if(items.value===""){
            showError(index)
        }
        else{
            hideError(index)
            calculate();
        }

    });




})


// inputs.forEach((item,index){

// })




