document.getElementById("quiz").onsubmit=function() {
    variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
    sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
    con = parseInt(document.querySelector('input[name = "con"]:checked').value);
    ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
    
    
    result = variable + sub + con + ifstate;
    
 document.getElementById("grade").innerHTML = result;

grading = [
    {score:0,feedback:"I don't think you studied"},
    {score:1,feedback:"You need to spend more time. Try again"},
    {score:2,feedback:"I think you could do better. Try again."},
    {score:3,feedback:"So close. Try again."},
    {score:4,feedback:"Excellent! You're a pro!"}
    ];
for(i=0; i<grading.length; i++) {
    if(result == grading[i].score) {
        result2 = grading[i].feedback + "<br />";
    }
}
document.getElementById("grade2").innerHTML = result2; 
return false;
}