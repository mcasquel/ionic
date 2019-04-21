

import { Editora } from "./Editora";
import { Autor } from "./Autor";

//só queremos atributos, por isso interface.
export interface Livro{	  
      editora: Editora;
      autor: Autor;
      titulo:string;
      subtitulo:string;
      capa:string;
      isbn:string;				
      publicacao:string;
      pagina:string;
    } 