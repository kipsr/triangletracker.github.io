function measurements(){

    var a= document.getElementById("A").value;
    var b= document.getElementById("B").value;
    var c= document.getElementById("C").value;

    var sides =[a,b,c];


if ( sides[0]+ sides[1]<=sides[2] || sides[0]+sides[2]<= sides[1] || sides[1]+sides[2]<=sides[0]){
 alert("Cannot form a triangle.");
}
else if(sides[0]===sides[1] && sides[1]===sides[2]){
 alert("Equilateral");
}
else if (sides[0]==sides[1]|| sides[0]==sides[2] || sides[1]==sides[2]) {
 alert("Isosceles");
}
else{
 ("Scalene");
}
}
