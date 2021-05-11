/*
    ===== Código de TypeScript =====
*/

// arreglos
let skills: (boolean | string | number)[] = [ 'Git', 'Angular', 'React', false, 101 ];

// interface -> es la manera de predefinir los elementos de un objeto
interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[]
    hometown?: string; // ? -> opcional
}

const personaje: Personaje = {
    nombre: "Zeke Jaeger",
    hp: 1000,
    habilidades: ["Lanzamiento de objetos", "Inteligencia", "Portador del titán bestia"]
};

personaje.hometown = "Marley";

console.table( personaje );