var don1n =new Array;
var don2n =new Array;
var don3n =new Array;
var don4n =new Array;

don1n = [1, 220, 3, 9, 7, 1, 80, 0, 0, 30,
3, 6, 7, 0, 0, 0, 0, 0, 32, 3,
0, 0, 0, 0, 0, 0, 0, 33, 35, 0,
0, 0, 0, 0, 0, 0, 30, 3, 0, 0,
0, 0, 0, 0, 0, 31, 132, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 50, 1, 1, 4];

don1n = [1, 220, 3, 9, 7, 0, 0, 0, 0, 30,
3, 6, 7, 0, 0, 0, 0, 0, 32, 3,
0, 0, 0, 0, 0, 0, 0, 33, 35, 0,
0, 0, 0, 0, 0, 0, 30, 3, 0, 0,
0, 0, 0, 0, 0, 31, 132, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 50, 1, 1, 4];

don1n = [1, 220, 3, 6, 7, 0, 0, 0, 0, 30,
3, 6, 7, 0, 0, 0, 0, 0, 220, 3,
0, 0, 0, 0, 0, 0, 0, 219, 35, 0,
0, 0, 0, 0, 0, 0, 30, 3, 0, 0,
0, 0, 0, 0, 0, 31, 126, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 125, 1, 1, 4];

don1n = [1, 220, 3, 6, 7, 0, 0, 0, 0, 30,
3, 6, 7, 0, 0, 0, 0, 0, 220, 3,
0, 0, 0, 0, 0, 0, 0, 219, 35, 0,
0, 0, 0, 0, 0, 0, 30, 3, 0, 0,
0, 0, 0, 0, 0, 31, 132, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 120, 1, 1, 4];


var total=new Array;
total[0]="don1n"; total[1]="don2n"; total[2]="don3n"; total[3]="don4n";
var total1=new Array;
total1[0]=don1n; total1[1]=don2n; total1[2]=don3n; total1[3]=don4n;

for(var ui= 0; ui < 4; ui++)
{
for(var i= 0; i < 75; i++)
{
var nouveauinput;
function ajouteElemen() {
var body   = document.body || document.getElementsByTagName('body')[0],
nouveauinput  =  document.createElement("input");
nouveauinput.setAttribute("type", "number");
nouveauinput.setAttribute("id", total[ui]+i);
nouveauinput.setAttribute("value", total1[ui][i]);
nouveauinput.setAttribute("style", "display: none;");
body.insertBefore(nouveauinput,body.childNodes[0]);
}  
ajouteElemen();
}
}
