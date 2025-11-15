import { Votante } from "./Votante.js";

export class VotacionService {
  constructor() {
    this.votantes = [];
  }

  async cargarDatos() {
    const response = await fetch("./data/votantes.json");
    const data = await response.json();

    this.votantes = data.map(
      (votante) =>
        new Votante(
          votante.cedula,
          votante.nombre,
          votante.lugarVotacion,
          votante.mesa
        )
    );
  }

  buscarPorCedula(cedula) {
    return this.votantes.find((votante) => votante.cedula === cedula);
  }
}
