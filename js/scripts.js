function measurements(){

    var L1= document.getElementById("La").value;
    var L2= document.getElementById("Lb").value;
    var L3= document.getElementById("Lc").value;

    var a=parseInt(L1);
    var b=parseInt(L2);
    var c=parseInt(L3);


if (a+b <= c || b+c <= a || a+c <= b){
 alert("Cannot form a triangle.");
}
else if((a===b && b===c){
 alert("Equilateral");
}
else if (a===b || a===c || b===c) {
 alert("Isoceles");
}
else {
 ("Scalene");
}
}