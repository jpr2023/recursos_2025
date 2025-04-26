const boton = document.getElementById("miBoton");
const parrafo = document.getElementById("miParrafo");

boton.addEventListener("click", () => {
  parrafo.classList.toggle("oculto");

  // Opcional: Cambiar el texto del botón dinámicamente
  if (parrafo.classList.contains("oculto")) {
    boton.textContent = "Mostrar Párrafo";
  } else {
    boton.textContent = "Ocultar Párrafo";
  }
});
