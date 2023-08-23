// Get ElementById
var a = document.getElementById("head1");
console.log(a);
a.innerHTML = "Learn JavaScript";
a.style.color = "blue";



// Get ElementByClass
var b = document.getElementsByClassName("select1");
console.log(b);
b[0].innerHTML = "How are you?";
b[1].style.color = "red";



// Get element by TagName
var c = document.getElementsByTagName("p");
c[0].style.color ="green";
c[1].style.color= "orange";


var d = document.getElementsByName("text")[0];
var e = document.getElementById("head");
function message(){
    e.innerHTML = "Hello " + d.value;
}
console.log(d);
