function lengths(){

    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;

    var a=parseInt(a);
    var b=parseInt(b);
    var c=parseInt(c);

if (( a+b <= c) || (b+c <= a) || (a+c <= b)){
 alert("Cannot form a triangle.");
}
else if((a===b) && (b===c)){
 alert("Equilateral");
}
else if ((a===b) || (a===c) || (b===c)) {
 alert("Isoceles");
}
else {
 alert("Scalene");
}
}