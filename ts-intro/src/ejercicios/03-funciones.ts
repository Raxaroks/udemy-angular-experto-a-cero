/*   ===== Código de TypeScript =====   */

// función convencional
function add(a: number, b: number): number {
    return a + b;
}

// función de flecha
const arrowAdd = (a: number, b: number): number => {
    return a + b;
}

// jerarquía de argumentos -> regulares, opcionales, por defecto
const multi = (num: number, anotherNum: number, base: number = 2): number => {
    return num * base;
}

interface PersonajeRPG {
    nombre: string;
    puntos_vida: number;
    mostrarVida: () => void;
}

// función con objeto como argumento
const curar = (personaje: PersonajeRPG, pointsToHeal: number): void => {
    personaje.puntos_vida += pointsToHeal;
}

const nuevoPersonaje: PersonajeRPG = {
    nombre: "Arthas",
    puntos_vida: 70,
    mostrarVida() {
        console.log("Puntos de vida:", this.puntos_vida);
    }
}

curar( nuevoPersonaje, 25 );
nuevoPersonaje.mostrarVida();