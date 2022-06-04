
function cert() 
{
    x = document.getElementById("x").value;
    y = document.getElementById("y").value/100;
 

    var year = Math.floor(x*y);
    var half = Math.floor(x*y/6);
    var quarter = Math.floor(x*y/4);
    var month = Math.floor(x*y/12);

    document.getElementById("year").innerHTML = year;
    document.getElementById("half").innerHTML = half;
    document.getElementById("quarter").innerHTML = quarter;
    document.getElementById("month").innerHTML = month;


    
 }