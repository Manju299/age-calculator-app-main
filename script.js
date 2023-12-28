const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");
const errMeassage = document.querySelectorAll(".errMeassage");
const ageYear = document.querySelector(".Years");
const ageMonth = document.querySelector(".Months");
const ageDay = document.querySelector(".Days");


const date = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

let bday = inputs[0];
let bmonth = inputs[1];
let byear = inputs[2];



function calculate(){
    let ageInYear = currentYear - byear.value;
    let ageInMonths = (currentMonth + 1) - bmonth.value;
    let ageInDays = currentDay - bday.value;

    if (ageInDays < 0) {
        let daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        ageInDays = daysInLastMonth - bday.value + currentDay;
        ageInMonths--;
    }

    // Adjust for negative months
    if (ageInMonths < 0) {
        ageInMonths += 12;
        ageInYear--;
    }

    return { year:ageInYear,
             month:ageInMonths,
             day:ageInDays
            };

}

function showError(indexText){
    errMeassage[indexText].classList.add("errMessage");
    errMeassage[indexText].classList.remove("inactive");

}

function hideError(indexText){
    errMeassage[indexText].setAttribute("hidden", true);
}


function checkDate(){
    if (inputs[0].value === "" || inputs[0].value >31 || isNaN === true){
        showError(0);
        return false    
     }
     else{
        hideError(0)
        return true
     }

}


function checkMonth(){
    if (inputs[1].value === "" || inputs[1].value >12 || isNaN === true){
        showError(1);
        return false    
     }
     else{
        hideError(1)
        return true
     }

}


function checYear(){
    if (inputs[2].value === "" || inputs[2].value > currentYear || isNaN === true){
        showError(2);
        return false
        

     }
     else{
        hideError(2)
        return true
     }

}


console.log(btn);
btn.addEventListener("click", (event)=>{
    let age;
    event.preventDefault();
    console.log("Button is clicked");
    age = calculate();
    let validdate = checkDate();
    let validMonth = checkMonth();
    let validYear = checYear();
    if(validdate && validMonth && validYear){
        age = calculate();
        ageDay.innerHTML = age.day;
        console.log(age.day);
        ageMonth.innerHTML = age.month;
        ageYear.innerHTML = age.year;
        
    }
    

    // inputs.forEach((items,index)=>{
    //     if(items.value===""){
    //         showError(index)
    //     }
    //     else{
    //         hideError(index)
            
            
    //     }

    // });

    // age = calculate();
    // ageDay.innerHTML = age.day;
    // console.log(age.day);
    // ageMonth.innerHTML = age.month;
    // ageYear.innerHTML = age.year;
    




})






