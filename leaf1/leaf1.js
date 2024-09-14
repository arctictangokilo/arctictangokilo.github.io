// Toggle emoji animation
const disableEmojisButton = document.getElementById('disable-emojis');
const hallowmojiElements = document.querySelectorAll('.particle');

let emojisEnabled = true;
disableEmojisButton.addEventListener('click', () => {
  emojisEnabled = !emojisEnabled;
  if (emojisEnabled) {
    disableEmojisButton.textContent = 'Disable Leaves';
    hallowmojiElements.forEach(emoji => {
      emoji.style.display = 'block'; // Make emojis visible
      emoji.style.animationPlayState = 'running'; // Resume animation
    });
  } else {
    disableEmojisButton.textContent = 'Enable Leaves';
    hallowmojiElements.forEach(emoji => {
      emoji.style.display = 'none'; // Hide emojis
      emoji.style.animationPlayState = 'paused'; // Pause animation
    });
  }
});
