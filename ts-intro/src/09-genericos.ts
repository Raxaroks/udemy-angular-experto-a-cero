/*   ===== Código de TypeScript =====   */

// las funciones flecha son lo verga, papu
function whatTypeIAm<T>(argumento: T): string {
    return (argumento).toString();
}

console.log( whatTypeIAm("Hola perroooos!") );
console.log( whatTypeIAm(2332) );
console.log( whatTypeIAm([1,2,3,4,5]) );

let explicit = whatTypeIAm<number>(100);