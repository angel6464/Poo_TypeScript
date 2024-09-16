
/*EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
•	Sumar
•	Restar
•	Multiplicar
•	Dividir
•	Potencia
•	Factorial
*/

export default function ejercicio2(){
    console.log("");
    console.log("EJERCICIO2*******************"); 
    class Calculadora {
        private _numero1: number;
        private _numero2: number;
    
        constructor(numero1: number = 0, numero2: number = 0) {
            this._numero1 = numero1;
            this._numero2 = numero2;
        }
    
        // Getters
        get numero1(): number {
            return this._numero1;
        }
    
        get numero2(): number {
            return this._numero2;
        }
    
        // Setters
        set numero1(valor: number) {
            this._numero1 = valor;
        }
    
        set numero2(valor: number) {
            this._numero2 = valor;
        }
    
        // Métodos de cálculo
        sumar(): number {
            return this._numero1 + this._numero2;
        }
    
        restar(): number {
            return this._numero1 - this._numero2;
        }
    
        multiplicar(): number {
            return this._numero1 * this._numero2;
        }
    
        dividir(): number {
            if (this._numero2 === 0) {
                throw new Error('No se puede dividir entre 0');
            }
            return this._numero1 / this._numero2;
        }
    
        potencia(): number {
            return Math.pow(this._numero1, this._numero2);
        }
    
        factorial(n: number): number {
            if (n < 0) {
                throw new Error('No se puede calcular el factorial de un número negativo');
            }
            if (n === 0 || n === 1) {
                return 1;
            }
            return n * this.factorial(n - 1);
        }
    }
    
    // Ejemplo
    const calc = new Calculadora();
    
    // Usando los setters para asignar valores
    calc.numero1 = 5;
    calc.numero2 = 3;
    
    console.log(`Suma: ${calc.sumar()}`);            // Suma: 8
    console.log(`Resta: ${calc.restar()}`);          // Resta: 2
    console.log(`Multiplicación: ${calc.multiplicar()}`); // Multiplicación: 15
    console.log(`División: ${calc.dividir()}`);      // División: 1.666...
    console.log(`Potencia: ${calc.potencia()}`);     // Potencia: 125
    
    // Cálculo del factorial usando el método factorial
    console.log(`Factorial de 5: ${calc.factorial(3)}`);  // Factorial de 5: 120
}
    