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
function registro() {
  let nombre = document.getElementById("propietario").value; //ir al HTML y ver el id.
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let enfermedad = document.getElementById("enfermedad").value;
  let tipo = document.getElementById("tipo").value;

  if(!nombre || !nombreMascota || !enfermedad || !tipo) return alert('Debe completar los campos requeridos');  // validacion 

  let mascota1 = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);

  const resultado = document.getElementById("resultado");
  const ul = document.createElement("ul")
  ul.innerHTML = `
    <li>${mascota1.datosPropietario()}. ${mascota1.tipo} </li>
    <li>Mientras que el nombre de la mascota es: ${mascota1.nombre} y la enfermedad es: ${mascota1.enfermedad}</li>
  `;
  resultado.appendChild(ul);

}