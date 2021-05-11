/*   ===== Código de TypeScript =====   */

interface Hero {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    barrio: string;
    pais: string;
    ciudad: string
}

const superHeroe: Hero = {
    nombre: "Spider-Man",
    edad: 0,
    direccion: {
        barrio: "Brooklyn",
        ciudad: "New York",
        pais: "USA",
    },
    mostrarDireccion() {
        return this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );