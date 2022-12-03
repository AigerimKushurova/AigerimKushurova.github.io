/// NAVIGATION BAR ///
// Add nav-bar dynamically (programmatically)
function insertNavBar() {
  // create header for name
  let nav = document.getElementById("nav");
  let logo = document.createElement("a");
  logo.setAttribute("href", "index.html");
  logo.innerHTML = "John&nbsp;Smith";
  logo.setAttribute("id", "logo");
  nav.appendChild(logo);

  // elements for hambeger menu
  let div = document.createElement("div");
  div.classList.add("hamburger");

  let lab = document.createElement("label");
  lab.classList.add("hamburger-icon");
  lab.setAttribute("for", "hamburger-checkbox");
  div.appendChild(lab);

  let chk = document.createElement("input");
  chk.setAttribute("type", "checkbox");
  chk.setAttribute("class", "checkbox");
  chk.setAttribute("id", "hamburger-checkbox");
  div.appendChild(chk);

  // create menu list
  let ul = document.createElement("ul");
  ul.setAttribute("class", "nav-set");
  ul.setAttribute("id", "menu");

  let li = document.createElement("li");
  let a = document.createElement("a");
  a.innerHTML = "<span id='me'>My</span>Projects";
  a.classList.add("a-nav");
  a.setAttribute("href", "pages/projects.html");
  li.appendChild(a);
  ul.appendChild(li);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "<span id='me'>My</span>Thoughts";
  a.classList.add("a-nav");
  a.setAttribute("href", "pages/thoughts.html");
  li.appendChild(a);
  ul.appendChild(li);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "About<span id='me'>Me</span>";
  a.classList.add("a-nav");
  a.setAttribute("href", "pages/about.html");
  li.appendChild(a);
  ul.appendChild(li);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "Contact<span id='me'>Me</span>";
  a.classList.add("a-nav");
  a.setAttribute("href", "pages/contacts.html");
  li.appendChild(a);
  ul.appendChild(li);

  div.appendChild(ul);
  nav.appendChild(div);
}

insertNavBar();
////////////////////////////////////////////////

/// FOOTER ///
// Add footer dynamically (programmatically)
function insertFooter() {
  // create header for name
  let ft = document.getElementById("footer");
  ft.classList.add("footer");

  let fol = document.createElement("div");
  fol.innerHTML = "Follow Me";
  fol.classList.add("follow");
  ft.appendChild(fol);

  // create social buttons
  let soc = document.createElement("div");
  let a = document.createElement("a");
  let fb = "<i class='fa-brands fa-facebook fa-inverse fa-2xl'></i>";
  a.innerHTML = fb;
  a.classList.add("social");
  a.classList.add("fb");
  a.setAttribute("href", "https://facebook.com");
  soc.appendChild(a);
  ft.appendChild(soc);

  // create social buttons
  soc = document.createElement("div");
  a = document.createElement("a");
  let insta = "<i class='fa-brands fa-instagram fa-inverse fa-2xl'></i>";
  a.innerHTML = insta;
  a.classList.add("social");
  a.classList.add("insta");
  a.setAttribute("href", "https://instagram.com");
  soc.appendChild(a);
  ft.appendChild(soc);

  // create social buttons
  soc = document.createElement("div");
  a = document.createElement("a");
  let git = "<i class='fa-brands fa-github-square fa-inverse fa-2xl'></i>";
  a.innerHTML = git;
  a.classList.add("social");
  a.classList.add("git");
  a.setAttribute("href", "https://github.com");
  soc.appendChild(a);
  ft.appendChild(soc);
}

insertFooter();
////////////////////////////////////////////////

/// EVENT LISTENERS ///
// h1 style
let h = document.getElementById("title");
if (h) {
  h.addEventListener("click", function (e) {
    this.style.color = "red";
  });
}

// text3 style
let t = document.getElementById("text3");
if (t) {
  t.addEventListener("mouseenter", function (e) {
    this.style.backgroundColor = "yellow";
  });
  t.addEventListener("mouseout", function (e) {
    this.style.backgroundColor = "white";
  });
}

// text4 style
let t4 = document.getElementById("text4");
if (t4) {
  t4.addEventListener("click", changeFont);
}

function changeFont() {
  let p = this;
  p.style.fontSize = "26pt";
  p.style.color = "red";
  p.style.backgroundColor = "black";
}






////////////////////////////////////////////////



const social= document.getElementById("social");
const social_div= document.getElementsByClassName("V");
console.log(social_div);

let date_vol = document.createElement("p");

date_vol.innerHTML ="hi";

m=0;
for (let i = 'V1'; i =='V5'; i= i-i[1]+m){
  document.querySelector(i).appendChild(date_vol);
  m++;
}
document.querySelector(.V1).appendChild(date_vol);







