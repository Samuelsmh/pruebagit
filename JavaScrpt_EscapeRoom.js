document.getElementById('startButton').addEventListener('click', function() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  iniciarReloj();
});

document.querySelectorAll('.pista').forEach(pista => {
  pista.addEventListener('click', function() {
    // Lógica para mostrar la pista al hacer clic en la imagen
  });
});

document.getElementById('respuestaForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const respuesta = document.getElementById('respuesta').value;
  // Lógica para verificar la respuesta proporcionada por el usuario
});

let currentIndex = 0;
const images = document.querySelectorAll('#carrusel img');
setInterval(function() {
  currentIndex = (currentIndex + 1) % images.length;
  images.forEach(img => img.style.display = 'none');
  images[currentIndex].style.display = 'block';
}, 5000);

function iniciarReloj() {
  let tiempoRestante = 10 * 60; 
  const timerDisplay = document.getElementById('tiempo');
  const finalMessage = document.getElementById('final');
  const finalTimeDisplay = document.getElementById('tiempoFinal');
  
  const timer = setInterval(function() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    timerDisplay.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    tiempoRestante--;
    
    if (tiempoRestante < 0) {
      clearInterval(timer);
      finalMessage.style.display = 'block';
      finalTimeDisplay.textContent = `${10 - Math.floor(tiempoRestante / 60)}:${(60 - tiempoRestante % 60).toString().padStart(2, '0')}`;
    }
  }, 1000);
}
