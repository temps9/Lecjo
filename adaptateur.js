
/*****************debut adaptateur.js****permet de dire que c'est de l'audio******/
var monhexa, NbPtTotal = 0;
var raw = [];
var raw1 = [];
var leraw = [];


  var durerentete = NbPtTotal * 2;
  var longueurentete = durerentete + 44 - 8;
var convertisseur = function swap16(val) {
    return ((val & 0xFF) << 8)
           | ((val >> 8) & 0xFF);
}

samples = durerentete*0.0625;



var app = {};

(function() {

    app.utility = {

        /* js port of PHP function pack */
        pack : function (fmt) {
            var output = '';
            
            var argi = 1;
            for (var i = 0; i < fmt.length; i++) {
                var c = fmt.charAt(i);
                var arg = arguments[argi];
                argi++;
                
                switch (c) {

                    case "v":
                        output += String.fromCharCode(
                            arg & 255, 
                            (arg >> 8) & 255
                        );
                        break;

                    case "V":
                        output += String.fromCharCode(
                            arg & 255, 
                            (arg >> 8) & 255, 
                            (arg >> 16) & 255, 
                            (arg >> 24) & 255
                        );
                        break;

                    default:
                        throw new Error("Unknown pack format '"+c+"'");
                }
            }
            
            return output;
        }

    }

    /* Classic sound config : mono wav, 44100 Hz, 16 bit depth */
    app.config = {
        channels : 1,
        sampleRate : 44100,
        bitsPerSample : 16,
    }

}());

(function(){

    var pack = app.utility.pack;
    var config = app.config;

    // constructor
    app.wave = function (_data) {
        this.data = _data;
    };

    app.wave.prototype = {

        // Generate the wave content by concatenation, and encode it to base64.
        generate : function () {
            var chunk1 = this.makeChunk1(); // format chunk
            var chunk2 = this.makeChunk2(); // data chunk
            var header = this.makeHeader(chunk1.length, chunk2.length);
            var out = header + chunk1 + chunk2;
            return "data:audio/wav;base64," + btoa(out);
        },

        // Generate the content of the audio format chunk
        makeChunk1 : function () {
            var chunk1 = [
                "fmt ",
                "\x10\x00\x00\x00",
                "\x01\x00",// linear PCM
                "\x01\x00",// channels
                "\x44\xAC\x00\x00", // 44100
		"\x88\x58\x01\x00", // 88200
                "\x01\x00", // 2
                "\x10\x00" // 16
            ];
            return chunk1.join('');
        },

        // Generate the content of the data chunk
        makeChunk2 : function () {
            var data = this.data;

            var chunk2 = [
                "data", // chunk ID
                data.leraw
            ];
            return chunk2.join('');
        },

        // Generate the header chunk
        makeHeader : function () {
            var data = this.data;

            var header = [
                "RIFF",
		pack("V", 36 + leraw.length), 
                "WAVE"
            ];
console.log(header);
            return header.join('');
        }

    };

}());




/***********************fin adaptateur.js***********/
