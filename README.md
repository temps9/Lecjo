# Lecjo
This extension includes:
a background script, "background.js" 
a browser action 
a page "adn1.js" 
a page "index.html" 
# What it does
All it does is: generates an audio file when an HTML page contains don1n.
# What it shows
How to play music, adding little value to your HTML file
# Usage
 audio plug-in
# concept to realization
The values entered in the HTML page, are used to control the different acoustic dimensions. These data are used to generate an audio file, the abadie.joa format. Audio format, abadie.joa, is then converted, in the current format, which does not model, one that mimics.
# detail construction lecjo
The adn.js file, see if each open HTML page contains data, called "donne1". If data, called "donne1" are in an HTML page, dna.js uses it to generate sounds.
# Construction Example
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;a href="mailto:temps.jo@gmail.com"&gt;Contact et support: Joris Abadie&lt;/a&gt;
&lt;br&gt;&lt;br&gt;
&lt;div id='basewave1'&gt; &lt;/div&gt;
&lt;script type="text/javascript" src="adn.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

adn.js

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

for(var ui= 0; ui &lt; 2; ui++)
{
for(var i= 0; i &lt; 75; i++)
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

The values in the HTML page

indication:
44100 unit width is equal to 1 second.
The man can not hear over 40 musical notes per second.

number of repetitions of the total form : donne71
number of Wave front: donne11
Wave front 1
Wave front 1 height : donne1
Wave front 1 width: donne2
Wave front 1 height repeat: donne3
Wave front 1 width for height stays in place:: donne4
Wave front 1 number of stays in place: donne72
Wave front 1 height variation: donne5
Wave front 1 limit of the height variation: donne6
Wave front 1 width variation: donne7
Wave front 1 limit of the width variation: donne8

Wave front 2
Wave front 2 height : donne9
Wave front 2 width:donne10
Wave front 2 width for height stays in place: donne12
Wave front 2 number of stays in place: donne73
Wave front 2 height variation: donne13
Wave front 2 limit of the height variation: donne14
Wave front 2 width variation: donne15
Wave front 2 limit of the width variation: donne16

Wave front 3
Wave front 3 height repeat: donne17
Wave front 3 height : donne18
Wave front 3 width: donne19
Wave front 3 height repeat: donne20
Wave front 3 width for height stays in place: donne21
Wave front 3 height variation: donne22
Wave front 3 limit of the height variation: donne23
Wave front 3 width variation: donne24
Wave front 3 limit of the width variation: donne25

Wave front 4
Activation du mode Wave front 4 en position 1: donne26
Wave front 4 height : donne27
Wave front 4 width: donne28
Wave front 4 height repeat: donne29
Wave front 4 width for height stays in place:donne30
Wave front 4 height variation: donne31
limit of the height variation: donne32
width variation: donne33
limit of the width variation: donne34

Wave front 5
Activation du mode Wave front 5 en position 1: donne35
height : donne36
width: donne37
height repeat: donne38
width for height stays in place: donne39
height variation: donne40
limit of the height variation: donne41
width variation: donne42
limit of the width variation: donne43

Wave front 6
Activation du mode Wave front 6 en position 1: donne44
height : donne45
width: donne46
height repeat: donne47
width for height stays in place: donne48
height variation: donne49
limit of the height variation: donne50
width variation: donne51
limit of the width variation: donne52

Make surfing an audio (unicorn, White work)
Activation du mode surf en position 1: donne53
height : donne54
width:donne55
height repeat:donne56
width for height stays in place: donne57
height variation: donne58
limit of the height variation: donne59
width variation: donne60
limit of the width variation: donne61

case donne53 egal 2 : Enabling surf mode en inversion de durée
Wave front 1 width: donne2
Wave front 2 width: donne10
height repeat:donne56

case donne53 egal 3 : Enabling surf mode en inversion assymetrique de durée 3 fronts
Wave front 1 width: donne2
Wave front 2 width: donne10
Wave front 3 width: donne19
height repeat:donne56

case donne53 egal 4 : Enabling surf mode en inversion symetrique de durée 3 fronts
Wave front 1 width: donne2
Wave front 2 width: donne10
Wave front 3 width: donne19
height repeat:donne56

case donne53 egal 5 : Enabling surf mode en inversion assymetrique de durée 4 fronts
Wave front 1 width: donne2
Wave front 2 width: donne10
Wave front 3 width: donne19
Wave front 4 width: donne28
height repeat:donne56

case donne53 egal 6 : Enabling surf mode en inversion symetrique de durée 4 fronts
Wave front 1 width: donne2
Wave front 2 width: donne10
Wave front 3 width: donne19
Wave front 4 width: donne28
height repeat:donne56

case donne53 egal 7 : Enabling surf mode in symmetrical inversion of duration 5 fronts
Wave front 1 width: donne2
Wave front 2 width: donne10
Wave front 3 width: donne19
Wave front 4 width: donne28
Wave front 5 width: donne37
height repeat:donne56

Final inertia manager
Activation du mode inertia en position 1: done62
height : donne63
width: donne64
height repeat: donne65
width for height stays in place: donne66
height variation: donne67
limit of the height variation: donne68
width variation: donne69
limit of the width variation: donne70

donne74 Number of generated sound forms
