var don1n =new Array;
var don2n =new Array;
var don3n =new Array;
var don4n =new Array;
var don5n =new Array;
var don6n =new Array;
var don7n =new Array;

don1n = [1, 220, 100, 5, 100, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

don2n = [1, 220, 50, 7, 50, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

don3n = [1, 220, 25, 9, 25, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

don4n = [1, 220, 12, 9, 12, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

don5n = [1, 220, 12, 9, 12, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

don6n = [1, 220, 12, 9, 12, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

don7n = [1, 220, 12, 9, 12, 1, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 130, 75,
0, 0, 0, 0, 0, 0, 0, 120, 75, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 3, 1, 0, 7];

var total=new Array;
total[0]="don1n"; total[1]="don2n"; total[2]="don3n"; total[3]="don4n"; total[4]="don5n"; total[5]="don6n"; total[6]="don7n";
var total1=new Array;
total1[0]=don1n; total1[1]=don2n; total1[2]=don3n; total1[3]=don4n; total1[4]=don5n; total1[5]=don6n; total1[6]=don7n;

for(var ui= 0; ui < 7; ui++)
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
