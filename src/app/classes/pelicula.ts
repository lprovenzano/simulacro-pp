export class Pelicula {
  nombre: string;
  tipo: string;
  fechaEstreno: string;
  cantidadPublico: number;
  foto: string;
  actor: string;


  constructor(nombre: string, tipo: string, fechaEstreno: string, cantidadPublico: number, foto: string, actor: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.fechaEstreno = fechaEstreno;
    this.cantidadPublico = cantidadPublico;
    this.foto = foto;
    this.actor = actor;
  }
}
