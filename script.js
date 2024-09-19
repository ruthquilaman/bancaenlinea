// Definición de la función constructora Person
function Person(name, dni, password, cash) {
    this.nombre = name;
    this.rut = dni;
    this.clave = password;
    this.saldo = cash;
}

// Creación de personas predeterminadas
var person1 = new Person("Ruth Quilamán", "123456789", 1234, 2000);
var person2 = new Person("Romina Allende", "987654321", 4321, 1000);
var person3 = new Person("Patricia Olivares", "234567890", 2345, 3000);

// Lista con datos de personas
var people = [person1, person2, person3];

// Función para iniciar sesión
function iniciarSesion() {
    alert("Bienvenido a Banca en Línea");
    var dni = prompt("Ingrese su rut");
    var password = parseInt(prompt("Ingrese su clave"));

    for (let i = 0; i < people.length; i++) {
        if (people[i].rut == dni && people[i].clave == password) {
            alert("Bienvenido " + people[i].nombre);
            menu(people[i]);
            return; // Termina la función si se encuentra una coincidencia
        }
    }

    alert("Usuario incorrecto");
}

// Función de menú
function menu(usuario) {
    do {
        var opcion = parseInt(prompt("Seleccione que desea hacer: \n 1.- Ver saldo \n 2.- Realizar giro \n 3.- Realizar depósito \n 4.- Salir"));

        switch (opcion) {
            case 1:
                alert("Su saldo actual es: " + usuario.saldo);
                break;
            case 2:
                var giro = parseInt(prompt("Su saldo actual es: " + usuario.saldo + " \nIngrese el monto que desea girar"));

                if (giro > usuario.saldo) {
                    alert("No se puede realizar la operación solicitada. Excede el saldo");
                }
                if (giro <= usuario.saldo) {
                    usuario.saldo = usuario.saldo - giro;
                    alert("Giro realizado. Su nuevo saldo es " + usuario.saldo);
                }
                break;
            case 3:
                var deposito = parseInt(prompt("Su saldo actual es: " + usuario.saldo + " \nIngrese el monto que desea depositar"));

                usuario.saldo = usuario.saldo + deposito;
                alert("Deposito realizado. Su nuevo saldo es " + usuario.saldo);
                break;
            case 4:
                alert("Gracias por preferirnos");
                break;
            default:
                alert("Selección erronea");
                break;
        }

    } while (opcion != 4);
}

// Iniciar el proceso de inicio de sesión cuando se carga la página
window.onload = iniciarSesion;