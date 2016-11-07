var donne = [1, 220, 100, 5, 100, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

var donna = [1, 220, 50, 7, 50, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

var donnb = [1, 220, 25, 9, 25, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

var donnc = [1, 220, 12, 9, 12, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

var donnd = [1, 220, 12, 9, 12, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

var donnf = [1, 220, 12, 9, 12, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

var donng = [1, 220, 12, 9, 12, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];


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
}  
ajouteElemen1();
}


for(var i= 0; i < 75; i++)
{
var nouveauinput;
function ajouteElemen2() {
// crée un nouvel élément input
var body   = document.body || document.getElementsByTagName('body')[0],
nouveauinput  =  document.createElement("input");
nouveauinput.setAttribute("type", "number");
nouveauinput.setAttribute("id", ("donnb"+i));
nouveauinput.setAttribute("value", donnb[i]);
nouveauinput.setAttribute("style", "display: none;");
// ajoute l'élément qui vient d'être créé et son contenu au DOM
body.insertBefore(nouveauinput,body.childNodes[0]);
}  
ajouteElemen2();
}


for(var i= 0; i < 75; i++)
{
var nouveauinput;
function ajouteElemen3() {
// crée un nouvel élément input
var body   = document.body || document.getElementsByTagName('body')[0],
nouveauinput  =  document.createElement("input");
nouveauinput.setAttribute("type", "number");
nouveauinput.setAttribute("id", ("donnc"+i));
nouveauinput.setAttribute("value", donnc[i]);
nouveauinput.setAttribute("style", "display: none;");
// ajoute l'élément qui vient d'être créé et son contenu au DOM
body.insertBefore(nouveauinput,body.childNodes[0]);
}  
ajouteElemen3();
}

for(var i= 0; i < 75; i++)
{
var nouveauinput;
function ajouteElemen4() {
// crée un nouvel élément input
var body   = document.body || document.getElementsByTagName('body')[0],
nouveauinput  =  document.createElement("input");
nouveauinput.setAttribute("type", "number");
nouveauinput.setAttribute("id", ("donnd"+i));
nouveauinput.setAttribute("value", donnd[i]);
nouveauinput.setAttribute("style", "display: none;");
// ajoute l'élément qui vient d'être créé et son contenu au DOM
body.insertBefore(nouveauinput,body.childNodes[0]);
}  
ajouteElemen4();
}

for(var i= 0; i < 75; i++)
{
var nouveauinput;
function ajouteElemen5() {
// crée un nouvel élément input
var body   = document.body || document.getElementsByTagName('body')[0],
nouveauinput  =  document.createElement("input");
nouveauinput.setAttribute("type", "number");
nouveauinput.setAttribute("id", ("donnf"+i));
nouveauinput.setAttribute("value", donnf[i]);
nouveauinput.setAttribute("style", "display: none;");
// ajoute l'élément qui vient d'être créé et son contenu au DOM
body.insertBefore(nouveauinput,body.childNodes[0]);
}  
ajouteElemen5();
}

for(var i= 0; i < 75; i++)
{
var nouveauinput;
function ajouteElemen6() {
// crée un nouvel élément input
var body   = document.body || document.getElementsByTagName('body')[0],
nouveauinput  =  document.createElement("input");
nouveauinput.setAttribute("type", "number");
nouveauinput.setAttribute("id", ("donng"+i));
nouveauinput.setAttribute("value", donng[i]);
nouveauinput.setAttribute("style", "display: none;");
// ajoute l'élément qui vient d'être créé et son contenu au DOM
body.insertBefore(nouveauinput,body.childNodes[0]);
}  
ajouteElemen6();
}

