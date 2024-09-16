
/*EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos: 
•	Crear un constructor que reciba como parámetros el título y género de la canción.
•	Utiliza los métodos get y set para recibir e imprimir la propiedad autor. 
•	Crea un método para mostrar los datos de la canción. 

*/

export default function ejercicio3(){
    console.log("");
    console.log("EJERCICIO3*******************"); 
class Cancion {
    public titulo: string;
    public genero: string;
    private _autor: string;

    // Constructor que recibe el título y el género de la canción
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this._autor = ''; // Inicializamos el autor como vacío
    }

    // Getter para obtener el autor
    get autor(): string {
        return this._autor;
    }

    // Setter para establecer el autor
    set autor(nuevoAutor: string) {
        this._autor = nuevoAutor;
    }

    // Método para mostrar los datos de la canción
    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this._autor}`);
    }
}

// Ejemplo de uso
const cancion = new Cancion('Bohemian Rhapsody', 'Rock');

// Estableciendo el autor usando el setter
cancion.autor = 'Queen';

// Mostrando los datos de la canción
cancion.mostrarDatos();

// Obteniendo el autor usando el getter
console.log(`El autor de la canción es: ${cancion.autor}`);
console.log("*******************"); 
}