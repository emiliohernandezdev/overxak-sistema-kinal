export class Persona {
    constructor(public primer_nombre: string,
        public segundo_nombre: string,
        public primer_apellido: string,
        public segundo_apellido: string,
        public apellido_conyugal : string,
        public fecha_nacimiento: Date,
        public religion : string,
        public correo: string,
        public genero: string,
        public departamento: string,
        public municipio: string,
        public zona: number,
        public colonia: string,
        public avenida: string,
        public calle: string,
        public manzana: string,
        public noCasa : string,
        public celular: number,
        public casa: number,
        public otro: number
    ){
 
    }
}