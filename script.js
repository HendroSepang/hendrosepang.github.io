function calculateArea() {
    const urlParams = new URLSearchParams(window.location.search);
    const radius = urlParams.get('radius');
  
    if (radius === null) {
      document.getElementById('result').innerText = 'Error: Please provide a radius parameter in the URL.';
    } else {
      const area = Math.PI * radius ** 2;
      document.getElementById('result').innerText = `The area of a circle with radius ${radius} is ${area}.`;
    }
  }
  