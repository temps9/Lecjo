var don1n =new Array;
var don2n =new Array;
var don3n =new Array;
var don4n =new Array;

don1n = [1, 200, 100, 0, 0, 0, 0, 0, 0, 50,
120, 2, 1, 1, 1, 1, 1, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 30, 0, 0, 4];

don2n = [1, 200, 52, 0, 0, 0, 0, 0, 0, 50,
20, 2, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 60, 0, 0, 4];

don3n = [1, 220, 100, 0, 0, 0, 0, 0, 0, 30,
100, 4, 0, 0, 0, 0, 0, 0, 140, 200,
0, 0, 0, 0, 0, 0, 0, 110, 200, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 30, 0, 0, 4];

don4n = [1, 200, 50, 0, 0, 0, 0, 0, 0, 50,
48, 2, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 60, 0, 0, 4];


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

