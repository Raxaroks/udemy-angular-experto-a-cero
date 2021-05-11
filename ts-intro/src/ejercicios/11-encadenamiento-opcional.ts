/*   ===== Código de TypeScript =====   */

interface Passenger {
    fullname: string;
    children?: string[]
}

const pasajero: Passenger = {
    fullname: "Andrés"
}

const otro_pasajero: Passenger = {
    fullname: "JACOVET",
    children: ["Ramiro", "Jensepio"]
}

function printChildren( pasajero: Passenger ): void {
    // secure operator
    const howMany = pasajero.children?.length || 0;
    console.log( howMany );
}

printChildren(pasajero)