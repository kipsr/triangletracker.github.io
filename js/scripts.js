function measurements(){

    var a= document.getElementById("A").value;
    var b= document.getElementById("B").value;
    var c= document.getElementById("C").value;

    var x=parseInt(a);
    var y=parseInt(b);
    var z=parseInt(c);


if (x+y<=z || x+z<= y || y+z<=x){
 alert("Cannot form a triangle.");
}
else if(x===y && y===z){
 alert("Equilateral");
}
else if (x==y || x==z || y==z) {
 alert("Isoceles");
}
else{
 ("Scalene");
}
}
