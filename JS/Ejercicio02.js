function verificarPalindromo() {
  const texto = document.getElementById('palindromeInput').value.toLowerCase().replace(/\s/g, '');
  const invertido = texto.split('').reverse().join('');
  if (texto === invertido) {
    document.getElementById('palindromeResultado').innerText = "La frase es un palíndromo.";
  } else {
    document.getElementById('palindromeResultado').innerText = "La frase no es un palíndromo.";
  }
}