// Function to update the clock hands based on the current time
function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    // Select clock hands
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');
  
    // Calculate rotation angles for clock hands
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    const minAngle = minutes * 6;
    const secondAngle = seconds * 6;
  
    // Apply rotation to clock hands
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minHand.style.transform = `rotate(${minAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial update
  updateClock();
  
  // Function to add more markings
  function addMarkings() {
    const innerClockFace = document.querySelector('.inner-clock-face');
  
    for (let i = 5; i <= 60; i += 5) {
      const marking = document.createElement('div');
      marking.classList.add('marking');
      marking.classList.add(`marking-${i}`);
      marking.style.transform = `rotate(${(i / 60) * 360}deg)`;
      innerClockFace.appendChild(marking);
    }
  }
  
  // Execute function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', addMarkings);
  
  // Function to add a center dot
  function addCenterDot() {
    const innerClockFace = document.querySelector('.inner-clock-face');
  
    // Create the center element
    const centerDot = document.createElement('div');
    centerDot.classList.add('center-dot');
  
    // Add it to the inner dial
    innerClockFace.appendChild(centerDot);
  }
  
  // Execute function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', addCenterDot);
  
  // Array with images
  let bilderArray = ["bilda.png", "bildb.png", "bildc.png"];
  
  // Select random image
  let zufallsIndex = Math.floor(Math.random() * bilderArray.length);
  let zufallsBild = bilderArray[zufallsIndex];
  
  // Set the background of the .clock container with the selected random image path
  const clockContainer = document.querySelector('.clock');
  clockContainer.style.backgroundImage = `url('${zufallsBild}')`;
  