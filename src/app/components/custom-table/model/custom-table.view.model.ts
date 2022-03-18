export class CustomTableViewModel {
  page = 1;
  tableHeadItems: any = {
    car: [
      { name: '#', order: null, col: null },
      { name: 'Nombre', order: 'name', col: null },
      { name: 'Conductor', order: '', col: null },
      { name: 'Marca', order: '', col: null },
      { name: 'Traccion', order: 'traction', col: null },
      { name: 'CC', order: 'cc', col: null },
      { name: 'CV', order: 'cv', col: null },
      { name: 'Actualizado', order: 'updated', col: null },
      { name: 'Creado', order: 'created', col: null },
    ],
    tournament: [
      { name: '#', order: '', col: null },
      { name: 'Nombre', order: '', col: null },
      { name: 'Fecha Inicio', order: 'startDate', col: null },
      { name: 'Inscritos', order: '', col: null },
      { name: 'Requisitos', order: '', col: null },
      { name: 'Actualizado', order: 'updated', col: null },
      { name: 'Creado', order: 'created', col: null },
    ],
    inscription: [
      { name: '#', order: null, col: null },
      { name: 'Coche', order: null, col: null },
      { name: 'Torneo', order: null, col: null },
      { name: 'Actualizado', order: 'updated', col: null },
      { name: 'Creado', order: 'created', col: null },
    ],
    brand: [
      { name: '#', order: null, col: null },
      { name: 'Nombre', order: 'name', col: null },
      { name: 'Pais', order: null, col: null },
      { name: 'Total Coches', order: null, col: null },
      { name: 'Actualizado', order: 'updated', col: null },
      { name: 'Creado', order: 'created', col: null },
    ],
    topEvent: [
      { name: '#', order: null, col: null },
      { name: 'Nombre', order: 'name', col: null },
      { name: 'Categoria', order: null, col: null },
      { name: 'Fecha', order: 'date', col: null },
      { name: 'Valoracion', order: null, col: null },
      { name: 'Votos', order: null, col: null },
      { name: 'Actualizado', order: 'updated', col: null },
      { name: 'Creado', order: 'created', col: null },
    ],
    user: [
      { name: 'Nombre', order: '', col: null },
      { name: 'Rol', order: '', col: null },
      { name: 'Email', order: '', col: null },
      { name: 'Actualizado', order: 'updated', col: null },
      { name: 'Creado', order: 'created', col: null },
    ],
    voting: [
      { name: 'Tipo', order: 'type', col: 'col-2' },
      { name: 'Valor', order: 'value', col: 'col-4' },
      { name: 'Item', order: null, col: 'col-4' },
      { name: 'Actualizado', order: 'updated', col: 'col-1' },
      { name: 'Creado', order: 'created', col: null },
    ],
  };
}
