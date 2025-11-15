import { VotacionService } from "./classes/VotacionService.js";

const service = new VotacionService();
await service.cargarDatos();

const inputCedula = document.getElementById("cedula");
const btnConsultar = document.getElementById("btnConsultar");
const divResultado = document.getElementById("resultado");

btnConsultar.addEventListener("click", () => {
  const cedula = inputCedula.value.trim();

  if (!cedula) {
    alert("⚠️ Por favor ingrese una cédula");
    return;
  }

  const votante = service.buscarPorCedula(cedula);

  if (votante) {
    divResultado.innerHTML = votante.mostrarInfo();
  } else {
    alert("❌ No se encontró un votante con esa cédula");
  }

  divResultado.style.display = "block";
});

function mos(msg) {
  divResultado.innerHTML = `<p>${msg}</p>`;
}
