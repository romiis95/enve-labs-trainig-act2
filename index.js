let opcion;

do {
  opcion = prompt("Seleccione una opción:\n1. Saludar\n2. Calcular edad\nq. Salir");

  switch (opcion) {
    case "1":
      let nombre = prompt("Ingrese su nombre:");
      alert("¡Hola " + nombre + "!");
      break;

    case "2":
      let edad = parseInt(prompt("Ingrese su edad:"));
      if (!isNaN(edad)) {
        let añoNacimiento = new Date().getFullYear() - edad;
        alert("Su año de nacimiento es: " + añoNacimiento);
      } else {
        alert("La edad ingresada no es válida.");
      }
      break;

    case "q":
      alert("Hasta luego. ¡Adiós!");
      break;

    default:
      alert("Opción inválida. Por favor, seleccione una opción válida.");
      break;
  }
} while (opcion !== "q");





let nombre;

do {
  nombre = prompt("Ingrese su nombre (o 'q' para salir):");

  if (nombre !== "q") {
    alert("¡Hola " + nombre + "!");
  }
} while (nombre !== "q");
