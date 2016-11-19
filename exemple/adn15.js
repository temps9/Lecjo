var don1n =new Array;
var don2n =new Array;
var don3n =new Array;

don1n = [1, 220, 7, 9, 7, 0, 0, 0, 0, 30,
7, 6, 7, 0, 0, 0, 0, 0, 32, 7,
0, 0, 0, 0, 0, 0, 0, 33, 7, 0,
0, 0, 0, 0, 0, 0, 30, 3, 0, 0,
0, 0, 0, 0, 0, 31, 140, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 100, 1, 1, 3];

don2n = [1, 220, 7, 9, 7, 0, 0, 0, 0, 30,
7, 6, 7, 0, 0, 0, 0, 0, 32, 7,
0, 0, 0, 0, 0, 0, 0, 33, 7, 0,
0, 0, 0, 0, 0, 0, 30, 3, 0, 0,
0, 0, 0, 0, 0, 31, 128, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 100, 1, 1, 3];

don3n = [1, 220, 6, 1, 50, 0, 0, 0, 0, 30,
6, 6, 50, 0, 0, 0, 0, 0, 219, 6,
0, 0, 0, 0, 0, 0, 0, 220, 50, 0,
0, 0, 0, 0, 0, 0, 30, 6, 0, 0,
0, 0, 0, 0, 0, 31, 200, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 100, 1, 1, 3];


var total=new Array;
total[0]="don1n"; total[1]="don2n"; total[2]="don3n";
var total1=new Array;
total1[0]=don1n; total1[1]=don2n; total1[2]=don3n;

for(var ui= 0; ui < 3; ui++)
{
for(var i= 0; i < 75; i++)
{
var nouveauinput;
function ajouteElemen() {
// crée un nouvel élément input
var body   = document.body || document.getElementsByTagName('body')[0],
nouveauinput  =  document.createElement("input");
nouveauinput.setAttribute("type", "number");
nouveauinput.setAttribute("id", total[ui]+i);
nouveauinput.setAttribute("value", total1[ui][i]);
nouveauinput.setAttribute("style", "display: none;");
// ajoute l'élément qui vient d'être créé et son contenu au DOM
body.insertBefore(nouveauinput,body.childNodes[0]);
console.log(total[ui]+i);
console.log(total1[ui][i]);
}  
ajouteElemen();
}
}
