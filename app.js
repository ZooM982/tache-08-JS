
let tab1 = [1, -2, 5, -9, 10, -6, 4, -3, 8, -7];
let tab2 = "-15, 22, -59, 91, -16, 64, -79, 38, -43, 87";

document.write("<p>Les élements de Tab1</p>");
document.write("[",tab1,"]");

let tab3 = tab1.filter(function (x) {return x > 0 });
document.write("<p>Les élements positifs de Tab1</p>");
document.write("[",tab3,"]");

document.write("<p>Les élements de Tab2</p>");
document.write("[",tab2,"]");

let tab4 = tab2.replace("-15, 22, -59, 91, -16, 64, -79, 38, -43, 87","0,0,0,0,0,0,0,0,0,0")
document.write("<p>Les élements remplacer par 0 de Tab2</p>");
document.write("[",tab4,"]");
