var don1n =new Array;
don1n = [1, 220, 100, 0, 50, 2, 0, 0, 0, 30,
100, 2, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 200, 3, 0, 1];

var total=new Array;
total[0]="don1n"; 
var total1=new Array;
total1[0]=don1n; 

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
