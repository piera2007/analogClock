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