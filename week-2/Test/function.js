// Functions
document.write("<hr>");
document.write("Function");
document.write("<br>");
function greetings(){
    document.write("Good Morning"+"<br>");
}
greetings();
greetings();
document.write("<br>");

// ................................................


function greetings(name){
    document.write("Good Morning " + name + "<br>");
}
greetings("Rispa");
greetings("Joseph");


// ..................................................

function sum(n1, n2){
    return n1+n2;
}
var result=sum(5, 10);
document.write(result);