function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    const minAngle = minutes * 6;
    const secondAngle = seconds * 6;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minHand.style.transform = `rotate(${minAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
  }
  setInterval(updateClock, 1000); // Update every second
  updateClock(); // Initial update

  function addMarkings() {
    const innerClockFace = document.querySelector('.inner-clock-face');
  
    // Füge Markierungen hinzu (Anpassen nach Bedarf)
    for (let i = 5; i <= 60; i += 5) {
      const marking = document.createElement('div');
      marking.classList.add('marking');
      marking.classList.add(`marking-${i}`);
      marking.style.transform = `rotate(${(i / 60) * 360}deg)`;
      innerClockFace.appendChild(marking);
    }
  }
  
  
  // Führe die Funktion aus, wenn das DOM vollständig geladen ist
  document.addEventListener('DOMContentLoaded', addMarkings);
  function addCenterDot() {
    const innerClockFace = document.querySelector('.inner-clock-face');
  
    // Erstelle das Element für den Mittelpunkt
    const centerDot = document.createElement('div');
    centerDot.classList.add('center-dot');
  
    // Füge es zum inneren Zifferblatt hinzu
    innerClockFace.appendChild(centerDot);
  }
  
  // Führe die Funktion aus, wenn das DOM vollständig geladen ist
  document.addEventListener('DOMContentLoaded', addCenterDot);

  // Array mit Bildern
let bilderArray = ["bilda.png", "bildb.png", "bildc.png"];

// Zufälliges Bild auswählen
let zufallsIndex = Math.floor(Math.random() * bilderArray.length);
let zufallsBild = bilderArray[zufallsIndex];

// Setze den Hintergrund des .clock-Containers mit dem ausgewählten zufälligen Bildpfad
const clockContainer = document.querySelector('.clock');
clockContainer.style.backgroundImage = `url('${zufallsBild}')`;
  