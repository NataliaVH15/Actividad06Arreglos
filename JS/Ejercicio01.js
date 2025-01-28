function evaluarTexto() {
    const texto = document.getElementById('txtOracion').value;
    const resultado = document.getElementById('resultado');

    if (texto === "") {
        resultado.textContent = "Por favor, ingrese una oración.";
        return;
    }

    const esMayusculas = texto === texto.toUpperCase();
    const esMinusculas = texto === texto.toLowerCase();

    if (esMayusculas) {
        resultado.textContent = "El texto está en MAYÚSCULAS.";
    } else if (esMinusculas) {
        resultado.textContent = "El texto está en minúsculas.";
    } else {
        resultado.textContent = "El texto tiene una combinación de mayúsculas y minúsculas.";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnEvaluar').addEventListener('click', evaluarTexto, false);
  
});