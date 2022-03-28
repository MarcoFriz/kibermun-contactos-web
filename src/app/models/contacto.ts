export class Contacto {
  id: string | null;
  nombre: string;
  apellido: string;
  telefono: string;
  edad?: number;
  email?: string;
  constructor(data: any) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.apellido = data.apellido;
    this.telefono = data.telefono;
    this.edad = data.edad;
    this.email = data.email;
  }
}
