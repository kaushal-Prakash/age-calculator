//output elements
const output_years = $(".res-y");
const output_months = $(".res-m");
const output_days = $(".res-d");
const output_btn = $(".submit-btn");

//input elements
const input_years = $(".year");
const input_months = $(".month");
const input_days = $(".day");

//error elements
const error_years = $(".eyear");
const error_months = $(".emonth");
const error_days = $(".eday");

var isValid = false;

$(".submit-btn").click(calculateDate);

//error message
input_days.on("input",function(){
    if(input_days.val()>31){
        isValid = false;
        error_days.text("Must be a valid day");
    }
    else if(input_days.val()<0){
        isValid = false;
        error_days.text("Must be a valid day");
    }
    else if(input_days.val()=""){
        error_days.text("This field is required");
        isValid = false;
    }
    else if(input_days.val()==0){
        error_days.text("This field is required");
        isValid = false;
    }
    else{
        isValid = true;
        error_days.text("Valid");
    }
});

input_months.on("input",function(){
    if(input_months.val()>12){
        isValid = false;
        error_months.text("Must be a valid month");
    }
    else if(input_months.val()<0){
        isValid = false;
        error_months.text("Must be a valid month");
    }
    else if(input_months.val()=""){
        error_months.text("This field is required");
        isValid = false;
    }
    else if(input_months.val()==0){
        error_months.text("This field is required");
        isValid = false;
    }
    else{
        isValid = true;
        error_months.text("Valid");
    }
});

input_years.on("input",function(){
    if(input_years.val()>2024){
        isValid = false;
        error_years.text("Must be a valid year (max-2024)");
    }
    else if(input_years.val()<0){
        isValid = false;
        error_years.text("Must be a valid year (max-2024)");
    }
    else if(input_years.val()==0){
        error_years.text("This field is required");
        isValid = false;
    }
    else if(input_years.val()=""){
        error_years.text("This field is required");
        isValid = false;
    }
    else{
        isValid = true;
        error_years.text("Valid");
    }
});

function calculateDate(isValid){
    if (isValid) {
        var birthday = `${input_months.val()}/${input_days.val()}/${input_years.val()}`;
        console.log(birthday);
    
        var bdayObj = new Date(birthday);
        console.log(bdayObj);
    
        var ageDiffMilli = Date.now() - bdayObj;
        console.log(ageDiffMilli);
    
        var age = new Date(ageDiffMilli);
        console.log(age);
    
        var age_year = age.getUTCFullYear() - 1970;
        var age_month = age.getUTCMonth();
        var age_day = age.getUTCDay() - 1;
    
        output_days.text(age_day);
        output_months.text(age_month);
        output_years.text(age_year);
    } else {
        alert("Error occurred!");
    }
    
}