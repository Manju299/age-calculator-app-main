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
    // console.log(currentMonth)

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

    // if(currentMonth >= bmonth.value && currentDay  >= bday.value){
    //    ageInYear = currentYear-byear.value;
    //    ageInMonths = currentMonth-bmonth.value;
    // }
    // else{
    //     ageInYear--;
    //     if(currentDay < bday){
    //     ageInMonths = currentMonth - bmonth.value;
    //     ageInMonths = 12-ageInMonths;
    //     }

    // }


    // console.log(ageInYear +" years and months" +ageInMonths,ageInDays)

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


console.log(btn);
btn.addEventListener("click", (event)=>{
    let age;
    event.preventDefault();
    console.log("Button is clicked");
    // console.log(currentDay-bday.value);
    // console.log(currentDay)
    // console.log(byear.value);
    inputs.forEach((items,index)=>{
        if(items.value===""){
            showError(index)
        }
        else{
            hideError(index)
            age = calculate();
            // console.log(age)
            ageDay.innerHTML = age.day;
            console.log(age.day);
            // console.log(ageDay.value);
            ageMonth.innerHTML = age.month;
            ageYear.innerHTML = age.year;
            
        }

    });
    




})


// inputs.forEach((item,index){

// })




