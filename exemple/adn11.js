var donne = [1, 220, 3, 6, 7, 0, 0, 0, 0, 30,
3, 6, 7, 0, 0, 0, 0, 0, 220, 3,
0, 0, 0, 0, 0, 0, 0, 219, 35, 0,
0, 0, 0, 0, 0, 0, 30, 3, 0, 0,
0, 0, 0, 0, 0, 31, 140, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 50, 1, 1, 2];

var donna = [1, 220, 3, 6, 7, 0, 0, 0, 0, 30,
3, 6, 7, 0, 0, 0, 0, 0, 220, 3,
0, 0, 0, 0, 0, 0, 0, 219, 35, 0,
0, 0, 0, 0, 0, 0, 30, 3, 0, 0,
0, 0, 0, 0, 0, 31, 147, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 50, 1, 1, 2];


for(var i= 0; i < 75; i++)
{
var nouveauinput;
function ajouteElemen() {
// crée un nouvel élément input
var body   = document.body || document.getElementsByTagName('body')[0],
nouveauinput  =  document.createElement("input");
nouveauinput.setAttribute("type", "number");
nouveauinput.setAttribute("id", ("donne"+i));
nouveauinput.setAttribute("value", donne[i]);
nouveauinput.setAttribute("style", "display: none;");
// ajoute l'élément qui vient d'être créé et son contenu au DOM
body.insertBefore(nouveauinput,body.childNodes[0]);
}  
ajouteElemen();
}

for(var i= 0; i < 75; i++)
{
var nouveauinput;
function ajouteElemen1() {
// crée un nouvel élément input
var body   = document.body || document.getElementsByTagName('body')[0],
nouveauinput  =  document.createElement("input");
nouveauinput.setAttribute("type", "number");
nouveauinput.setAttribute("id", ("donna"+i));
nouveauinput.setAttribute("value", donna[i]);
nouveauinput.setAttribute("style", "display: none;");
// ajoute l'élément qui vient d'être créé et son contenu au DOM
body.insertBefore(nouveauinput,body.childNodes[0]);
console.log("donna"+i);
console.log(donna[i]);
}  
ajouteElemen1();
}
