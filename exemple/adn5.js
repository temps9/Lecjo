var m1 = [1, 220, 4, 6, 0, 5, 130, 0, 0, 30,
196, 2, 0, 5, 128, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 100, 0, 0, 1];

var don = { 1: m1 }

var total =[];
var total1 =[];
for(var uiu= 1; uiu < 2; uiu++)
{
total[uiu -1] = "don"+[uiu]+"n";
total1[uiu -1]=don[uiu];
}

for(var ui= 0; ui < 1; ui++)
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
