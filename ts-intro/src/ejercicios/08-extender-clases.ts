/*   ===== Código de TypeScript =====   */

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string,
    ) {}
}

class Heroe extends PersonaNormal {    
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
    ) {
        super( nombreReal, "Brooklyn, New York" );
    }
}

const ironman = new Heroe( "Spider-Man", 33, "Peter Parker" );
console.log( ironman );