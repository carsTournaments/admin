export class CustomTableViewModel {
    page = 1;
    tableHeadItems: any = {
        brand: [
            { name: '#', order: null, col: null },
            { name: 'Nombre', order: 'name', col: null },
            { name: 'Pais', order: 'country', col: null },
            { name: 'Continente', order: 'continent', col: null },
            { name: 'Total Coches', order: null, col: null },
            { name: 'Actualizado', order: 'updated', col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
        car: [
            { name: '#', order: null, col: null },
            { name: 'Conductor', order: 'driver', col: null },
            { name: 'Marca', order: 'brand', col: null },
            { name: 'Modelo', order: 'model', col: null },
            { name: 'Combustible', order: 'fuel', col: null },
            { name: 'Traccion', order: 'traction', col: null },
            { name: 'CC', order: 'cc', col: null },
            { name: 'CV', order: 'cv', col: null },
            { name: 'Año', order: 'year', col: null },
            { name: 'Inscripciones', order: null, col: null },
            { name: 'Actualizado', order: 'updated', col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
        image: [
            { name: '#', order: null, col: null },
            { name: 'Nombre', order: null, col: null },
            { name: 'Tipo', order: 'type', col: null },
            { name: 'Actualizado', order: 'updated', col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
        like: [
            { name: 'Coche', order: 'car', col: null },
            { name: 'Usuario', order: 'user', col: null },
            { name: 'Actualizado', order: 'updated', col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
        inscription: [
            { name: 'Coche', order: 'car', col: null },
            { name: 'Torneo', order: 'tournament', col: null },
            { name: 'Actualizado', order: 'updated', col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
        pairing: [
            { name: 'Coche 1', order: 'car1', col: null },
            { name: 'Coche 2', order: 'car2', col: null },
            { name: 'Votos', order: 'votes', col: null },
            { name: 'Ganador', order: 'winner', col: null },
            { name: 'Ronda', order: 'round', col: null },
            { name: 'Torneo', order: null, col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
        tournament: [
            { name: '#', order: '', col: null },
            { name: 'Nombre', order: 'name', col: null },
            { name: 'Fecha Inicio', order: 'startDate', col: null },
            { name: 'Inscritos', order: '', col: null },
            { name: 'Rondas', order: '', col: null },
            { name: 'Requisitos', order: 'requisites', col: null },
            { name: 'Estado', order: 'status', col: null },
            { name: 'Actualizado', order: 'updated', col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
        round: [
            { name: 'Nombre', order: 'name', col: null },
            { name: 'Participantes', order: 'participants', col: null },
            { name: 'Torneo', order: 'date', col: null },
            { name: 'Fecha Inicio', order: 'startDate', col: null },
            { name: 'Fecha Fin', order: 'endDate', col: null },
            { name: 'Estado', order: 'updated', col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
        user: [
            { name: '#', order: '', col: null },
            { name: 'Nombre', order: 'name', col: null },
            { name: 'Email', order: 'email', col: null },
            { name: 'Rol', order: 'role', col: null },
            { name: 'Coches', order: null, col: null },
            { name: 'Actualizado', order: 'updated', col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
        vote: [
            { name: 'Torneo', order: null, col: null },
            { name: 'Ronda', order: null, col: null },
            { name: 'Coche', order: 'value', col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
        winner: [
            { name: 'Torneo', order: 'tournament', col: null },
            { name: 'Oro', order: 'golrd', col: null },
            { name: 'Plata', order: 'silver', col: null },
            { name: 'Bronce', order: 'bronze', col: null },
            { name: 'Creado', order: 'created', col: null },
        ],
    };
}
