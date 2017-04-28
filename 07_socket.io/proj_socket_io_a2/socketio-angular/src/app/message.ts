export class Message {

    // El user lo asigna el servidor al conectar, usando socket.id
    // El content se saca del input del formulario
    constructor(private user: string, private content: string) { }

    toString(): string {
        return this.user + " " + this.content;
    }

}