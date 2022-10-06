export class Pelicula {
  id: string;
  nombre: string;
  tipo: string;
  fechaEstreno: string;
  cantidadPublico: number;
  foto: string;

  constructor(id: string, nombre: string, tipo: string, fechaEstreno: string, cantidadPublico: number, foto: string) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.fechaEstreno = fechaEstreno;
    this.cantidadPublico = cantidadPublico;
    this.foto = foto;
  }
}
