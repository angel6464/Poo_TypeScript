/*
EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos: 
•	Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
•	Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
•	Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
•	Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta. 
•	Define un objeto de la clase Cuenta y llama sus métodos.
*/

export default function ejercicio4(){
    console.log("");
    console.log("EJERCICIO4*******************"); 
    class Cuenta {
        public nombre: string;
        public tipoCuenta: string;
        public numeroCuenta: string;
        private _cantidad: number;
    
        // Constructor que recibe nombre, cantidad, tipo de cuenta y número de cuenta
        constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
            this.nombre = nombre;
            this._cantidad = cantidad;
            this.tipoCuenta = tipoCuenta;
            this.numeroCuenta = numeroCuenta;
        }
    
        // Método depositar
        depositar(valor: number): void {
            if (valor < 5) {
                console.log('El valor a depositar debe ser mayor a $5.00');
            } else {
                this._cantidad += valor;
                console.log(`Se ha depositado correctamente: $${valor}`);
            }
        }
    
        // Método retirar
        retirar(valor: number): void {
            if (valor > this._cantidad) {
                console.log('No hay suficiente saldo en la cuenta');
            } else if (valor < 5) {
                console.log('El valor a retirar debe ser mayor a $5.00');
            } else {
                this._cantidad -= valor;
                console.log(`Ha retirado: $${valor}. Saldo restante: $${this._cantidad}`);
            }
        }
    
        // Método para mostrar los datos de la cuenta
        mostrarDatos(): void {
            console.log(`Nombre: ${this.nombre}`);
            console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
            console.log(`Número de cuenta: ${this.numeroCuenta}`);
        }
    
        // Getter para obtener el saldo
        get saldo(): number {
            return this._cantidad;
        }
    }
    
    // Ejemplo de uso
    const cuenta = new Cuenta('Juan Pérez', 100, 'Ahorro', '545412541');
    
    // Llamada a métodos
    cuenta.mostrarDatos();  
    cuenta.depositar(3);  
    cuenta.depositar(50); 
    cuenta.retirar(3);     
    cuenta.retirar(200);   
    cuenta.retirar(20);   
   
    
    // Mostrar saldo actual
    console.log(`Saldo actual: $${cuenta.saldo}`); 
}