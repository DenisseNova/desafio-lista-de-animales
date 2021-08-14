class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombrePropietario = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  datosPropietario() {
    return `El nombre del dueño es:  ${this._nombrePropietario}. El domicilio es: ${this._direccion} 
        y el numero de telefonico de contacto: ${this._telefono}`
  }
}