/*
EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos: 
•	Crear un método constructor para recibir los datos.
•	Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
•	Crea un método para mostrar todos los datos personales (será el método abstracto).
•	Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
•	En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
•	La clase Empleado va heredar de la clase Persona.
•	Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.


*/


export default function ejercicio5(){
    console.log("");
    console.log("EJERCICIO 5*******************"); 
    
    // Clase abstracta Persona
abstract class Persona {
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;

    // Constructor para recibir los datos
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para verificar si es mayor de edad
    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} es menor de edad.`);
        }
    }

    // Método abstracto para mostrar los datos personales
    abstract mostrarDatos(): void;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    public sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    // Método para cargar el sueldo
    cargarSueldo(nuevoSueldo: number): void {
        this.sueldo = nuevoSueldo;
        console.log(`El nuevo sueldo de ${this.nombre} es: $${this.sueldo}`);
    }

    // Método para imprimir el sueldo
    imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} es: $${this.sueldo}`);
    }

    // Implementación del método abstracto mostrarDatos
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.esMayorDeEdad();
    }
}

// Ejemplo de uso
const empleado = new Empleado('Jose', 'Manuel', 'Calle Las Manzanas', '2440-2440', 30, 1500);

//  datos personales
empleado.mostrarDatos();

//  sueldo
empleado.imprimirSueldo();

// Cambia el sueldo
empleado.cargarSueldo(2000);

// Volver a mostrar el sueldo
empleado.imprimirSueldo();

}