
/*EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, 
el primer método que obtenga el título, color y fuente de la página, el 
segundo método que indique como desea que aparezca el título si centrado,
derecha o izquierda y el tercer método que imprima todas las propiedades.*/

export default function ejercicio1(){

    console.log("//ANGEL ALVARADO GUIA POO TYPESCRIPT")
    console.log("");
    console.log("EJERCICIO1*******************"); 
    class CabeceraPagina {
        private _titulo: string;
        private _color: string;
        private _fuente: string;
        private _alineacion: 'centrado' | 'derecha' | 'izquierda';
    
        constructor(titulo: string, color: string, fuente: string) {
            this._titulo = titulo;
            this._color = color;
            this._fuente = fuente;
            this._alineacion = 'izquierda'; // Valor por defecto
        }
    
        // Getters
        get titulo(): string {
            return this._titulo;
        }
    
        get color(): string {
            return this._color;
        }
    
        get fuente(): string {
            return this._fuente;
        }
    
        get alineacion(): 'centrado' | 'derecha' | 'izquierda' {
            return this._alineacion;
        }
    
        // Setters
        set titulo(nuevoTitulo: string) {
            this._titulo = nuevoTitulo;
        }
    
        set color(nuevoColor: string) {
            this._color = nuevoColor;
        }
    
        set fuente(nuevaFuente: string) {
            this._fuente = nuevaFuente;
        }
    
        set alineacion(nuevaAlineacion: 'centrado' | 'derecha' | 'izquierda') {
            this._alineacion = nuevaAlineacion;
        }
    
        // Método para obtener las propiedades
        obtenerPropiedades(): { titulo: string; color: string; fuente: string } {
            return {
                titulo: this._titulo,
                color: this._color,
                fuente: this._fuente,
            };
        }
    
        // Método para configurar la alineación del título
        configurarAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
            this._alineacion = alineacion;
        }
    
        // Método para imprimir todas las propiedades
        MostrardatosEnPantalla(): void {
            console.log(`Título: ${this._titulo}`);
            console.log(`Color: ${this._color}`);
            console.log(`Fuente: ${this._fuente}`);
            console.log(`Alineación: ${this._alineacion}`);
        }
    }
    
    // Ejemplo de uso
    const cabecera = new CabeceraPagina('Mi Página', 'Azul', 'Arial');
    
    // Usando los getters
    console.log(cabecera.titulo+" "+cabecera.color+" "+cabecera.fuente); //
   
    // Usando los setters
    cabecera.titulo = 'Mi primer Pagina';
    cabecera.color = 'Rojo';
    cabecera.fuente = 'Helvetica';
    cabecera.alineacion = 'centrado';
    
    // Configurando la alineación
    cabecera.configurarAlineacion('derecha');
    
    // Imprimiendo las propiedades
    cabecera.MostrardatosEnPantalla();
}