var a = parseInt(prompt("Length 1."));
var b = parseInt(prompt("Length 2."));
var c = parseInt(prompt("Length 3."));

if (( a+b <= c) || (b+c <= a) || (a+c <= b)){
 alert("Cannot form a triangle.");
}
else if((a===b) && (b===c)){
 alert("equilateral");
}
else if ((a===b) || (a===c) || (b===c)) {
 alert("isoceles");
}
else {
 alert("scalene");
}