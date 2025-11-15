import { Persona } from "./Persona.js";

export class Votante extends Persona {
  constructor(cedula, nombre, lugarVotacion, mesa) {
    super(cedula, nombre);
    this.lugarVotacion = lugarVotacion;
    this.mesa = mesa;
  }

  mostrarInfo() {
    return `
      <h3>Resultado:</h3>
      <p><strong>Nombre:</strong> ${this.nombre}</p>
      <p><strong>Cédula:</strong> ${this.cedula}</p>
      <p><strong>Lugar de votación:</strong> ${this.lugarVotacion}</p>
      <p><strong>Mesa:</strong> ${this.mesa}</p>
    `;
  }
}
