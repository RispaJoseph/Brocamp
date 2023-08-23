document.write("<hr>");
document.write("Array" + "<br><br>");
var animal = ["Fox", "Cat", "Lion", "Tiger"];
document.write(animal);
document.write("<br>");
document.write(animal[1]);
animal[3]="Dog";
document.write("<br>");
document.write(animal);

// To find the length of the array

var x = animal.length;
document.write("<br>");
document.write(x);

// Accessing array using for loop
document.write("<br>" + "Animal using array" + "<br>");
for(var i = 0; i < x; i++){
    document.write(animal[i] + "<br>");
}

animal.push("Cheetah", "Elephant","Ox", "Wolf");
document.write(animal);


// Insertion and Deletion 
document.write("<br><br>");
document.write("<u>Insertion and Deletion in array</u><br>");
animal.push("Camel","Python");
document.write(animal);

document.write("<br>");
animal.pop();
document.write(animal);

// Sort
document.write("<br>");
animal.sort();
document.write(animal);


document.write("<br>");
animal.shift();
document.write(animal);

document.write("<br>");
animal.splice(2,3);
document.write(animal);



// Using Numbers

document.write("<br><br> <u>Array using Numbers</u><br>");
var number=[20, 40, 90, 10, 50, 70];
number.sort();
document.write(number);
document.write("<br>Adding two index <br>");
document.write(number[3] + number[0])


// Using Strings
document.write("<br><br> <u>Array using Characters</u><br>");
var text = "Java Script";
document.write(text[5]);


document.write("<br>");
document.write(text.charAt(7));


document.write("<br>");
var text1="Learn";
document.write(text1.concat(text));



document.write("<br>");
var text2 = "HELLO";
document.write(text2.toLowerCase());


document.write("<br>");
var text3 = "Rispa Joseph"
document.write(text3.toUpperCase());




document.write("<br>");
var text4= "Learn Java Script";
document.write(text4.slice(6,10));