document.write("<hr>");
document.write("For Loop");
document.write("<br>");
for(var i = 1; i <= 10; i++){
    document.write("Hello" + "<br>");
}



// While loop
document.write("<hr>");
document.write("While Loop");
document.write("<br>");
var i = 1;
while(i<=5){
    document.write(i + "<br>");
    i++;
}

document.write("<br>");
var i=5;
while(i>=1){
    document.write(i + "<br>");
    i--;
}



// Do while
document.write("<br>");
var i = 1;
do{
    document.write(i + ". Hello" + "<br>");
    i++;
}
while(i<=5);