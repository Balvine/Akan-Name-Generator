var submission = function() {
    var daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame"
    ];
    var femaleNames = [
      "Akosua",
       " Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama"
    ];
}
var name= document.getElementById("akan-names");
function myFunction() {
    const date= prompt("input date")
    const month= prompt("input month")
    const year= prompt("input year")
    if(date<=0 ||date>31){
        alert("invalid date");
    }
    else if(month<=0 || month>12){
        alert("invalid month");
    }
    else if(year<1900 || year>2020){
        alert("invalid year");
    }
    else {console.log(date,month,year)}

}
