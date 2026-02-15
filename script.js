function showSection(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

const n = 29; // liczba zdjęć
const images = [];

for (let i = 1; i <= n; i++) {
  images.push(`images/photo (${i}).jpg`);
}

const grid = document.getElementById("gallery-grid");
images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  grid.appendChild(img);
});

document.addEventListener("mousemove", e => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  const letter = document.querySelector('.letter');
  if (letter) {
    letter.style.transform = `rotate(${x / 10}deg) translate(${x}px, ${y}px)`;
  }
});


// Bingo
const bingoData = [
  {"text":"Wyjazd za granicę", "marked":false},
  {"text":"Autostop", "marked":false},
  {"text":"Toruń", "marked":false},
  {"text":"Działka", "marked":false},
  {"text":"Oceanarium", "marked":false},
  {"text":"Bieszczady", "marked":false},
  {"text":"Trip do nowego miasta", "marked":false},
  {"text":"Obejrzeć 5 seriali", "marked":false},
  {"text":"Spektakl", "marked":false},
  {"text":"Zajęcia z Ceramiki", "marked":false},
  {"text":"Conajmniej 50 tiktoków razem", "marked":false},
  {"text":"Zdać egzamin zawodowy", "marked":false},
  {"text":"Ścianka wspinaczkowa", "marked":false},
  {"text":"Zero dram na obozie", "marked":true},
  {"text":"Prawo jazdy", "marked":false},
  {"text":"Wspólny projekt szycia", "marked":true},
  {"text":"Zajebista 18", "marked":false},
  {"text":"Nowy kolczyk", "marked":false},
  {"text":"Spróbować nowych dań", "marked":false},
  {"text":"Przykleić zdjęcia na ściane - nowe dekoracje", "marked":false},
  {"text":"Photobudka", "marked":false},
  {"text":"Zdać", "marked":false},
  {"text":"Odwiedzić 3 muzea lub galerie sztuki", "marked":false},
  {"text":"Squashh", "marked":false},
  {"text":"Zoo", "marked":false}
];


const gridB = document.getElementById('bingo-grid');

bingoData.forEach(item => {
  const cell = document.createElement('div');
  cell.classList.add('bingo-cell');
  if(item.marked) cell.classList.add('marked');
  cell.textContent = item.text;

  cell.addEventListener('click', () => {
    cell.classList.toggle('marked');
  });

  gridB.appendChild(cell);
});

function getBingo() {
  const grid = document.querySelectorAll('.bingo-cell'); // wszystkie pola
  const bingoState = [];

  grid.forEach(cell => {
    bingoState.push({
      text: cell.textContent,
      marked: cell.classList.contains('marked')
    });
  });

  console.log(JSON.stringify(bingoState, null, 2));
}
