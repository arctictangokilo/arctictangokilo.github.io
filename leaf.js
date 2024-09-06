// List of colors from your provided list
const colors = [
  "#b3764c", "#1ddd69", "#408e7e", "#caf5ba", "#4dfb61", "#8f91ee", "#f8f3f2", "#5d2346",
  "#5cd258", "#d2f3be", "#59098a", "#723586", "#caf51a", "#7aafaf", "#d8fc9d", "#2adf48",
  "#75e908", "#34e69c", "#e3bc60", "#7919e1", "#662944", "#9d10d7", "#b8db75", "#389b4e",
  "#42921b", "#85568f", "#8b4933", "#e3be69", "#765432", "#64eb91"
];

// Function to spawn and randomize an element
function spawnRandomizedElement() {
  // Clone the existing outer div or create new ones
  const outerDiv = document.createElement("div");
  outerDiv.classList.add("outer");

  const innerDiv = document.createElement("div");
  innerDiv.classList.add("inner");
  outerDiv.appendChild(innerDiv);

  // Choose random left position, animation-delay, animation-duration, color, and letter
  const randomLeft = Math.random() * 90 + 5; // 5% to 95%
  const randomDelay = Math.random() * 6 + 1; // 1 to 7 seconds
  const randomDuration = Math.random() * 7 + 10; // 10 to 17 seconds
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Random color from list
  const randomLetter = String.fromCharCode(Math.floor(Math.random() * 20) + 65); // Random letter A to T

  // Apply the random properties
  outerDiv.style.left = randomLeft + "%";
  outerDiv.style.animationDelay = randomDelay + "s";
  outerDiv.style.animationDuration = randomDuration + "s";
  outerDiv.style.color = randomColor;
  innerDiv.textContent = randomLetter;

  // Append the element to the body (or wherever needed)
  document.body.appendChild(outerDiv);

  // Remove the element after the animation duration plus a small buffer
  setTimeout(() => {
    outerDiv.remove();
  }, (randomDelay + randomDuration + 1) * 1000); // Added 1 second buffer

  // Spawn another element after the delay
  setTimeout(spawnRandomizedElement, randomDelay * 1000);
}

// Start the spawning process
spawnRandomizedElement();
