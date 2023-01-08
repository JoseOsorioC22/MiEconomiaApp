import { Fuente } from "../Fuente.interface";
import { Pageable } from "../pageable/Pageable.interface";
import { Sort } from "../pageable/Sort.interface";

export interface FuenteResponseInterface{
  content:          Fuente ;
  pageable:         Pageable;
  totalPages:       number;
  last:             boolean;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             Sort;
  numberOfElements: number;
  first:            boolean;
  empty:            boolean;
}
