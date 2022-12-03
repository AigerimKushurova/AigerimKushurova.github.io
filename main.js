

////////////////////////////////////////////////



const social= document.getElementById("social");

let date_vol1 = document.createElement("p");
let date_vol2 = document.createElement("p");
let date_vol3 = document.createElement("p");
let date_vol4 = document.createElement("p");
let date_vol5 = document.createElement("p");

date_vol1.innerHTML ="2018";
date_vol1.style.backgroundColor="#FDD1D2";
date_vol2.innerHTML ="2018";
date_vol2.style.backgroundColor="#FDD1D2";
date_vol3.innerHTML ="2019";
date_vol3.style.backgroundColor="#FDD1D2";
date_vol4.innerHTML ="2019";
date_vol4.style.backgroundColor="#FDD1D2";
date_vol5.innerHTML ="2022";
date_vol5.style.backgroundColor="#FDD1D2";

document.querySelector('.V1').appendChild(date_vol1);
document.querySelector('.V2').appendChild(date_vol2);
document.querySelector('.V3').appendChild(date_vol3);
document.querySelector('.V4').appendChild(date_vol4);
document.querySelector('.V5').appendChild(date_vol5);

let up_img= document.createElement('img');
up_img.setAttribute("id","myBtn");
up_img.setAttribute("src","images/up.png");
up_img.style.width="8vh";
up_img.style.marginLeft="90%";


up_img.addEventListener(
"click",
function (event) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
);
document.body.appendChild(up_img);









