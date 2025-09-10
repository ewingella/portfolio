// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Créer un contexte audio avec gestion d'erreur
const audioContext = new (window.AudioContext || window.webkitAudioContext || null)();

// Fréquences des notes de piano (en Hz)
const noteFrequencies = {
    'c-key': 261.63,   // Do
    'c-sharp-key': 277.18,  // Do dièse (note noire)
    'd-key': 293.66,   // Ré
    'd-sharp-key': 311.13,  // Ré dièse (note noire)
    'e-key': 329.63,   // Mi
    'f-key': 349.23,   // Fa
    'f-sharp-key': 369.99,  // Fa dièse (note noire)
    'g-key': 392.00,   // Sol
    'g-sharp-key': 415.30,  // Sol dièse (note noire)
    'a-key': 440.00,   // La
    'a-sharp-key': 466.16,  // La dièse (note noire)
    'b-key': 493.88,   // Si
    'high-c-key': 523.25   // Do octave supérieure
};

// Fonction pour créer et jouer un son à une fréquence donnée
function playTone(frequency) {
    // Créer un oscillateur (générateur de son)
    const oscillator = audioContext.createOscillator();
    
    // Créer un contrôleur de volume
    const gainNode = audioContext.createGain();
    
    // Connecter oscillateur -> volume -> haut-parleurs
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configurer le son
    oscillator.frequency.value = frequency;  // Définir la fréquence
    oscillator.type = 'sine';                // Type d'onde (son doux)
    gainNode.gain.value = 0.3;               // Volume (30%)
    
    // Jouer le son pendant 0.5 seconde
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
}
// Write named functions that change the color of the keys below
function keyPlay(event) {
    event.target.style.backgroundColor = '#fd4d3f';
    // Récupérer la note associée à la touche
    const note = event.target.id;
    const frequency = noteFrequencies[note];
    playTone(frequency);
}

// Write a named function with event handler properties
function keyReturn(event){
    event.target.style.backgroundColor = '';
}

// Write a loop that runs the array elements through the function

function assignEvent(note){
    note.addEventListener('mousedown', keyPlay);
    note.addEventListener('mouseup', keyReturn);
}
notes.forEach(note => {
    assignEvent(note);
});

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button

nextOne.onclick = function() {
    nextTwo.hidden = false;
    nextOne.hidden = true;
    document.getElementById("letter-note-five").innerHTML = 'D';
    document.getElementById("letter-note-six").innerHTML = 'C';
}


// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
    nextThree.hidden = false;
    nextTwo.hidden = true;
    document.getElementById("word-five").innerHTML = 'DEAR';
    document.getElementById("word-six").innerHTML = 'FRI-';
    lastLyric.style.display = 'inline-block';
    document.getElementById("letter-note-three").innerHTML = 'G';
    document.getElementById("letter-note-four").innerHTML = 'E';
    document.getElementById("letter-note-five").innerHTML = 'C';
    document.getElementById("letter-note-six").innerHTML = 'B';

}


// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
    startOver.hidden = false;
    nextThree.hidden = true;
    document.getElementById("word-one").innerHTML = 'HAP-';
    document.getElementById("word-two").innerHTML = 'PY';
    document.getElementById("word-three").innerHTML = 'BIRTH';
    document.getElementById("word-four").innerHTML = 'DAY';
    document.getElementById("word-five").innerHTML = 'TO';
    document.getElementById("word-six").innerHTML = 'YOU!';
    document.getElementById("letter-note-one").innerHTML = 'F';
    document.getElementById("letter-note-two").innerHTML = 'F';
    document.getElementById("letter-note-three").innerHTML = 'E';
    document.getElementById("letter-note-four").innerHTML = 'C';
    document.getElementById("letter-note-five").innerHTML = 'D';
    document.getElementById("letter-note-six").innerHTML = 'C';
    lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}