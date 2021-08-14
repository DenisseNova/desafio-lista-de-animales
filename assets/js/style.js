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
class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombre = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombre() {
    return this._nombre
  }
  set nombre (nuevoNombreM) {
    this._nombre= nuevoNombreM;
  }
  get enfermedad() {
    return this._enfermedad
  }
  set enfermedad(nuevaEnfermedadM) {
    this._enfermedad = nuevaEnfermedadM;
  }
}