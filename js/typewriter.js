const textElement = document.getElementById("fetch");
const originalText = textElement.textContent.trim();
textElement.textContent = "";

let index = 0;
let typingInProgress = true;

function typeNextCharacter() {
  if (typingInProgress) {
    textElement.textContent += originalText[index];
    index++;

    if (index < originalText.length) {
      setTimeout(typeNextCharacter, 40);
    } else {
      const linkContainer = document.getElementById("link-container");
      linkContainer.classList.add("visible");
      typingInProgress = false; // Typing is complete
    }
  }
}

typeNextCharacter();

// If space bar is pressed and typing is in progress, skip typing and display content
document.addEventListener("keydown", function (event) {
  if (event.key === " " && typingInProgress) {
    textElement.textContent = originalText;
    typingInProgress = false;
    const linkContainer = document.getElementById("link-container");
    linkContainer.classList.add("visible");
  }
});
