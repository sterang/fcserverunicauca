const Eventos = require('./eventos_controller');
module.exports=(router)=> {
    router.post('/createEventos', Eventos.createEventos);
    router.post('/loadEvento', Eventos.loadEvento);
    router.get('/loadAllEvento', Eventos.allEventos);
    router.get('/loadAllEventoForAngular', Eventos.allEventsForAngular);
    router.post('/generateMetrica', Eventos.generateMetrics);
    router.post('/uploadEvento', Eventos.uploadEvento);
    router.post('/uploadEstadoEvento', Eventos.uploadEstadoEvento);
}