class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombrePropietario = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  datosPropietario() {
    return `El nombre del dueño es:  ${this._nombrePropietario}.  El domicilio es: ${this._direccion} 
        y el numero de telefonico de contacto: ${this._telefono}`
  }
}
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return `El tipo de animal es:  ${this._tipo}`
  }
}