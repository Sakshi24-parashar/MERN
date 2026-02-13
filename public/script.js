async function sendData() {
  const inputField = document.getElementById('inputField');
  const responseText = document.getElementById('responseText');

  const question = inputField.value.trim();
  if (!question) return;

  // show user message
  responseText.innerHTML += `<div class="quest">${question}</div>`;
  inputField.value = "";

  try {
    const response = await fetch('/gpt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });

    const data = await response.json();

    responseText.innerHTML += `<div class="answer">${data.answer}</div>`;

  } catch (err) {
    responseText.innerHTML += `<div class="answer">Server error</div>`;
  }
}
