

			var FichierAudioJo=[];
			var FichierAudioJox=[];
var text1={};
var choixjojoa = 1;
var levariateur = 1;
var lenommeur ;
var lenommeur1 ;



/***********troisieme partie génère la balise et lance la lecture**************/



function genereLaFin()
{

/**************genere balise*******/


lenommeur1= "basewave";


levariateur = levariateur + 1;


lenommeur = lenommeur1.concat(levariateur); 



var mon_audio1 = null;
var nouveauaudio1 = null;
var nouveauaudio1a = null;

function ajouteElement() {
  // crée un nouvel élément audio

  nouveauaudio1 =  document.createElement("audio");
nouveauaudio1.setAttribute("id", "audiojoa");
nouveauaudio1.setAttribute("autoplay", "autoplay");
nouveauaudio1.setAttribute("controls", "controls");
nouveauaudio1.setAttribute("loop", "loop");
nouveauaudio1.setAttribute("autobuffer", " ");
nouveauaudio1.setAttribute("preload", "none");


  // ajoute l'élément qui vient d'être créé et son contenu au DOM

 nouveauaudio1a = document.createElement("source");


  nouveauaudio1a.setAttribute("src", "data:audio/wav;basewave2,");
   nouveauaudio1.appendChild(nouveauaudio1a);
  mon_audio1 = document.getElementById(lenommeur);
  document.body.insertBefore(nouveauaudio1, mon_audio1);
}  

ajouteElement();

//fin zone 1




/**reglage force de l'amplitude***/
var volume = Math.floor(65535 / 8);

durerentete=NbPtTotal*2;

samples = durerentete*16;
var data = {};

 data = {leraw: leraw.join(''), samples: samples};

var wave = new app.wave(data);

/*********met en memoire l'audio*****/





 lenommeur = wave.generate();

sessionStorage.removeItem("MaMemoireAudio");
sessionStorage.setItem("MaMemoireAudio","lenommeur")
//var wave1 = sessionStorage.getItem("MaMemoireAudio");


var audio = document.getElementById("audiojoa");
var source = document.createElement("source");
source.setAttribute("src", lenommeur);
audio.appendChild(source);




}



function lecjoa1(FichierAudioJo)
{

 leraw = [];

var ludion = 32768, amplitude = 32768, nbdepoints = 5;

	function actiontotale(amplitude, nbdepoints, ludion)

	{

				var samples = 0, ote, ote1, reste, boucle;
			      var ideb, j, p, avec1, avec2, avec3;


/****debut front descend****/
		function frontdescend(amplitude, nbdepoints, ludion)
		{
				var ote1;

			      boucle = Math.round(nbdepoints *0.5);

			      reste = nbdepoints - boucle;

			      ote = Math.round( (ludion-amplitude)*0.5 );

				avec1 = boucle-1;
				p = table[avec1];

			function calcul1 (ludion, ote, ote1)
			{
			codebash = Math.round(ludion + ote1 - ote);
			

			 var volume = Math.floor(65535);
			monhexa = Math.floor(codebash -32767);
			  var total = leraw.push(app.utility.pack("v", monhexa));

			 }//fin calcul1


			for (ideb = boucle-1; ideb >= 0; ideb--) {
			ote1 = Math.floor((ote * 0.00001 * p[ideb]));
   			calcul1 (ludion, ote, ote1);
			}// fin frontdescend partie1 et fin for


/********deuxieme partie front descend****************/

			function sens2inverse(amplitude, nbdepoints, ludion)
			{
			var ote1;

			 boucle = Math.round(nbdepoints *0.5);
			 reste = nbdepoints - boucle;
			 ote = Math.round( (ludion-amplitude)*0.5 );

			avec1 = boucle-1;
			p = table[avec1];

			function calcul2 (ludion, ote, ote1)
			{
			codebash = Math.round(amplitude + ote - ote1);
			

			  var volume = Math.floor(65535);
			monhexa = Math.floor(codebash -32767);
			  var total = leraw.push(app.utility.pack("v", monhexa));

			 }// fin calcul2

			 for (ideb = 0; ideb < reste; ideb++) {
			 ote1 = Math.floor((ote * 0.00001 * p[ideb]));
   			 calcul2 (amplitude, ote, ote1);
			 } // fin du for

			 } // fin sens2inverse

			sens2inverse(amplitude, nbdepoints, ludion);		 

			ludion = amplitude
			return ludion;
			}// fin frontdescend

/********fin front descend *************************/


/****debut front montant*********************/
		function frontmontant(amplitude, nbdepoints, ludion)
		{
		ote = Math.round( (amplitude-ludion)*0.5 );			     
		 boucle = Math.round(nbdepoints * 0.5);
		reste = nbdepoints - boucle;
		
		var iee, j, p;
		avec1 = boucle-1;
		p = table[avec1];
		
			function calcul3 (ludion, ote, ote1)
			{
  			codebash = Math.round(ludion + ote - ote1);
			

			var volume = Math.floor(65535 );
			monhexa = Math.floor(codebash -32767);
			  var total = leraw.push(app.utility.pack("v", monhexa));

			}// fin calcul3



			for (ideb = boucle-1; ideb >= 0; ideb--) {
			ote1 = Math.floor(ote * 0.00001 * p[ideb]);
   			calcul3 (ludion, ote, ote1);
			}// fin premiere partie du fron et du for



				
			function sensinverse(amplitude, nbdepoints, ludion)
			{

			boucle = Math.round(nbdepoints * 0.5);
			reste = nbdepoints - boucle;
			ote = Math.round((amplitude-ludion)*0.5 );


			function calcul4 (ludion, ote, ote1)
			{
  			codebash = Math.round(ludion + ote + ote1);
			

			var volume = Math.floor(65535 );
			monhexa = Math.floor(codebash -32767);
			var total = leraw.push(app.utility.pack("v", monhexa));

			}// fin calcul4

/******/
				for (ideb = 0; ideb < reste; ideb++) {
				    ote1 = Math.round(ote * 0.00001 * p[ideb]);
   					calcul4 (ludion, ote, ote1);
				}
/********/






}

/* debut montant inverse du sens 1 */
sensinverse(amplitude, nbdepoints, ludion);

			ludion = amplitude
			return ludion;

			} //fin frontmontant





/****fin front montant***/







/*choix du sens du front*/

		  if (ludion > amplitude)
		    {
		 frontdescend(amplitude, nbdepoints, ludion);
		    }
		  else
		    {
		frontmontant(amplitude, nbdepoints, ludion);
		    }

/* fin choix du sens du front*/



}
/****fin action totale****/

for(var idejo= 0; idejo < FichierAudioJo.length; idejo++)
{//1

if (idejo/2 == Math.round(idejo/2)) {
	ludion = amplitude;
	amplitude = FichierAudioJo[idejo] * 256;
} else {//2
	nbdepoints = FichierAudioJo[idejo];
NbPtTotal += nbdepoints; /*44100 nbdepoints = 1 seconde*/
	actiontotale(amplitude, nbdepoints, ludion);




}//  fin du else de trie de récpération de données (amplitude et nbpoints)
}// fin de la boucle for de trie de récpération de données (amplitude et nbpoints)

genereLaFin();


return NbPtTotal;





}// fin fonction lecjoa1
