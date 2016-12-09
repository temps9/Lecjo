var don1n =new Array;
var don2n =new Array;

don1n = [1, 220, 100, 0, 0, 1, 130, 0, 0, 30,
100, 2, 0, 1, 220, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 100, 0, 0, 2];

don2n = [1, 220, 20, 0, 0, 1, 130, 0, 0, 30,
180, 2, 0, 1, 220, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 100, 0, 0, 2];

var total=new Array;
total[0]="don1n"; total[1]="don2n";
var total1=new Array;
total1[0]=don1n; total1[1]=don2n;

for(var ui= 0; ui < 2; ui++)
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
