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




// Get element by css Selector(QuerySelectorAll)
var f = document.querySelectorAll("h1");
console.log(f);
f[2].innerHTML = "Learn html";
f[3].style.color="red";


var g = document.querySelectorAll(".hclass");
console.log(g);
g[0].style.color = "green";
// g[1].innerHTML = "Learn Java";


var h = document.querySelectorAll("#head1");
console.log(h);
h[0].innerHTML= "learn";



var heading = document.createElement("h1");
function create(){
    heading.innerHTML = "Hello world!";
    document.body.appendChild(heading);
}


function remove(){
    heading.remove();
}




var heading2 = document.getElementById("head3");
var btn = document.getElementById(btn);

btn.addEventListener("click", changeColor);

heading2.addEventListener("mouseover", changeBG);
    
function changeBG(){
    heading2.style.backgroundColor = "blue";
}


function changeolor(){
    heading2.style.color = "white";
}