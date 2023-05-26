const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'id-ID';

let isListening = false;

function startListening() {
    if (!isListening) {
        recognition.start();
        isListening = true;
        showRecordingIndicator();
    }
}

function showRecordingIndicator() {
    const container = document.querySelector('.container');
    const recordingIndicator = document.createElement('div');
    recordingIndicator.classList.add('recording-indicator');
    container.appendChild(recordingIndicator);
}

function hideRecordingIndicator() {
    const recordingIndicator = document.querySelector('.recording-indicator');
    if (recordingIndicator) {
        recordingIndicator.parentNode.removeChild(recordingIndicator);
    }
}

recognition.onresult = function(event) {
    const result = event.results[0][0].transcript;
    document.getElementById('transcription').innerText = result;

    processSpeech(result);
}

recognition.onerror = function(event) {
    console.error('Terjadi kesalahan penelusuran suara:', event.error);
    hideRecordingIndicator();
}

recognition.onend = function() {
    isListening = false;
    hideRecordingIndicator();
}

function processSpeech(result) {
    let pahlawan = '';

    if (result.includes('Soekarno')) {
        pahlawan = 'Soekarno';
        showBio(pahlawan);
    } else if (result.includes('Hatta')) {
        pahlawan = 'Hatta';
        showBio(pahlawan);
    } else if (result.includes('Kartini')) {
        pahlawan = 'Kartini';
        showBio(pahlawan);
    } else {
        pahlawan = 'Pahlawan nasional tidak ditemukan.';
        clearBio();
    }

    document.getElementById('result').innerText = 'Hasil Penelusuran: ' + pahlawan;
}

function showBio(pahlawan) {
    const selectedPahlawan = pahlawanData.find(p => p.name.toLowerCase() === pahlawan.toLowerCase());
    if (selectedPahlawan) {
        document.getElementById('bio-container').style.display = 'block';
        document.getElementById('bio-name').innerText = selectedPahlawan.name;
        document.getElementById('bio-description').innerText = selectedPahlawan.description;
        document.getElementById('bio-image').style.backgroundImage = `url(${selectedPahlawan.image})`;
    }
}

function clearBio() {
    document.getElementById('bio-container').style.display = 'none';
    document.getElementById('bio-name').innerText = '';
    document.getElementById('bio-description').innerText = '';
    document.getElementById('bio-image').style.backgroundImage = '';
}
