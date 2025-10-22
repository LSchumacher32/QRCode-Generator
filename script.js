const input = document.getElementById("textInput");
const generateBtn = document.getElementById("generateBtn");
const qrResult = document.getElementById("qrResult");

generateBtn.addEventListener('click', function() {
    const text = input.value;
    if (text.trim() === "") {
      alert("Bitte geben Sie einen Text oder eine URL ein.");
      return;
    }
    qrResult.innerHTML = ""; // Vorherigen QR-Code löschen
    qrResult.style.display = "block"; // Jetzt sichtbar machen
    new QRCode(qrResult, {
      text: text,
      width: 200,
      height: 200
    });
  });
  
