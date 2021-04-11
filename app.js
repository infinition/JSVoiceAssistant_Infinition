    //By Infinition

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


//
const blague = [
    'Un jour, Dieu dit à Casto de ramer    Et depuis, Castorama...',
    'Quel est le fromage préféré de Brigitte Macron ?  le président'

];

const google = [
    'Très bien jouvre google',
   
];

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('La voix est active, vous pouvez parler');
    };

    recognition.onresult = function(event) {
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript;
        content.textContent = transcript;
        readOutLoud(transcript);

    };

    //add the listener to the btn

    btn.addEventListener('click', () => {
        recognition.start();

    });

    function readOutLoud(message) {
        const speech = new SpeechSynthesisUtterance();

        speech.text = 'Je ne comprends pas bien ce que tu dis';

        if (message.includes('blague')) {
            const finalText =
                blague[Math.floor(Math.random() * blague.length)];
            speech.text = finalText;
        }

        if (message.includes('Google')) {
            const finalText =
                google[Math.floor(Math.random() * google.length)];
            speech.text = finalText;
            window.open('http://www.google.com' )
        }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0.6;
    speech.voiceURI = "fr-FR-Standard-A"
    speech.lang = "fr-FR";



    window.speechSynthesis.speak(speech);
}