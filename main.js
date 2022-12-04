

////////////////////////////////////////////////

document.getElementById("h_op").onmouseover = function() {mouseOver()};
document.getElementById("h_op").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("h_op").style.color = "#612B98";
}

function mouseOut() {
  document.getElementById("h_op").style.color = "black";
}

let web_icon=document.createElement("link");
let head= document.getElementById("webhead");
head.appendChild(web_icon);

function setAttributes(el, attrs) {
     
     for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
     }
}
setAttributes(web_icon, {"rel": "shortcut icon", "href": "../images/web_icon.png", "type":"image/png"});




const social= document.getElementById("social");

let date_vol1 = document.createElement("p");
let date_vol2 = document.createElement("p");
let date_vol3 = document.createElement("p");
let date_vol4 = document.createElement("p");
let date_vol5 = document.createElement("p");

date_vol1.innerHTML ="2018";

date_vol1.style.verticalAlign="bottom";



date_vol2.innerHTML ="2018";

date_vol3.innerHTML ="2019";

date_vol4.innerHTML ="2019";

date_vol5.innerHTML ="2022";


document.querySelector('.V1').appendChild(date_vol1);
document.querySelector('.V2').appendChild(date_vol2);
document.querySelector('.V3').appendChild(date_vol3);
document.querySelector('.V4').appendChild(date_vol4);
document.querySelector('.V5').appendChild(date_vol5);





















