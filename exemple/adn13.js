var m1 = [1, 130, 42, 0, 28, -1, 220, 1, 7, 128,
28, 2, 21, -1, 30, 1, 7, 0, 190, 80,
0, 0, 0, 0, 0, 0, 0, 60, 60, 0,
0, 0, 0, 0, 0, 0, 160, 80, 0, 0,
0, 0, 0, 0, 0, 90, 60, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 90, 1, 1, 2];
var m2 = [1, 220, 7, 0, 28, 1, 130, 0, 42, 30,
7, 2, 21, 1, 128, 1, 28, 0, 190, 80,
0, 0, 0, 0, 0, 0, 0, 60, 60, 0,
0, 0, 0, 0, 0, 0, 160, 80, 0, 0,
0, 0, 0, 0, 0, 90, 60, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 60, 1, 1, 2];

var don = { 1: m1, 2: m2 }

var total =[];
var total1 =[];
for(var uiu= 1; uiu < 3; uiu++)
{
total[uiu -1] = "don"+[uiu]+"n";
total1[uiu -1]=don[uiu];
}

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
