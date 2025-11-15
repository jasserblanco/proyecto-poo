export class Persona {
  constructor(cedula, nombre) {
    this._cedula = cedula;
    this._nombre = nombre;
  }

  get cedula() {
    return this._cedula;
  }

  get nombre() {
    return this._nombre;
  }
}
