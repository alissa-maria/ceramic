const textElement = document.getElementById('fetch');
const originalText = textElement.textContent.trim();
textElement.textContent = '';

let index = 0;

function typeNextCharacter() {
  textElement.textContent += originalText[index];
  index++;

  if (index < originalText.length) {
    setTimeout(typeNextCharacter, 40);
  }
}

typeNextCharacter();
