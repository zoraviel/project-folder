

const divp = document.querySelector('div p');

const text1 = "Female Sign";
const text2 = "Transgender Sign";
const text3 = "Genderqueer/Nonbinary Sign";
const text4 = "Bigender Sign";
const text5 = "Epicene Sign";
const text6 = "Intergender Sign";
const text7 = "Polygender Sign";
const text8 = "Agender Sign";
const text9 = "Thirdgender Sign";
const text10 = "Demigirl Sign";
const text11 = "Demiboy Sign";
const text12 = "Neutrois Sign";
const text13 = "Male Sign"

let cismen = document.querySelector('#male');



cismen.onclick = () => {
  if (cismen.getAttribute('src') === 'images/malesign.png')
{
  cismen.setAttribute('src','images/femalesign.png');
  divp.textContent = text1;

} else if (cismen.getAttribute('src') === 'images/femalesign.png')
{
  cismen.setAttribute('src','images/transgendersign.png');
  divp.textContent = text2;

} else if (cismen.getAttribute('src') === 'images/transgendersign.png')
{
  cismen.setAttribute('src','images/nonbinarysign.svg.png');
    divp.textContent = text3;

} else if (cismen.getAttribute('src') === 'images/nonbinarysign.svg.png')
{
  cismen.setAttribute('src','images/bigendersign.png');
    divp.textContent = text4;

} else if (cismen.getAttribute('src') === 'images/bigendersign.png')
{
  cismen.setAttribute('src','images/epicenesign.png');
    divp.textContent = text5;

} else if (cismen.getAttribute('src') === 'images/epicenesign.png')
{
  cismen.setAttribute('src','images/intergendersign.png');
    divp.textContent = text6;

} else if (cismen.getAttribute('src') === 'images/intergendersign.png')
{
  cismen.setAttribute('src','images/polygendersign.png');
    divp.textContent = text7;

} else if (cismen.getAttribute('src') === 'images/polygendersign.png')
{
  cismen.setAttribute('src','images/agendersign.png');
    divp.textContent = text8;

}  else if (cismen.getAttribute('src') === 'images/agendersign.png')
{
  cismen.setAttribute('src','images/thirdgendersign.png');
    divp.textContent = text9;

} else if (cismen.getAttribute('src') === 'images/thirdgendersign.png')
{
  cismen.setAttribute('src','images/demigirlsign.png');
    divp.textContent = text10;

}
 else if (cismen.getAttribute('src') === 'images/demigirlsign.png')
{
  cismen.setAttribute('src','images/demiboysign.png');
    divp.textContent = text11;

} else if (cismen.getAttribute('src') === 'images/demiboysign.png')
{
 cismen.setAttribute('src','images/neutroissign.png');
   divp.textContent = text12;
}

else {
  cismen.setAttribute('src','images/malesign.png');
    divp.textContent = text13;
}
}

// NOTE this applies to ALL divs with class='box'
let divs = document.querySelectorAll('.flags')

// equivalent to hover
divs.forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    this.style.background = '#6E0DD0';
  });
  el.addEventListener('mouseleave', function() {
    this.style.background = '#000';
  });
});
