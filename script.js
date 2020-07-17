var name= document.getElementById("akan-names");
function myFunction() {
    const date= prompt("input date")
    const month= prompt("input month")
    const year= prompt("input year")
    if(date<=0 ||date>31){
        alert("valid date")
    }else if(month<=0 || month>12){
        alert("valid month")
    }else if(year<1900 || year>2020){
        alert("valid year")
    }
    
}
