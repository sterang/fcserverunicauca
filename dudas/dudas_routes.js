const Duda = require('./dudas_controller');
module.exports=(router)=> {
    router.post('/createDuda', Duda.createDuda);
    router.post('/loadDuda', Duda.loadDuda);
    router.get('/loadAllDudas', Duda.allDudas);
    router.post('/uploadRespuestaDuda', Duda.uploadRespuestaDuda);
    router.post('/uploadEstadoDuda', Duda.uploadEstadoDuda);
    router.post('/deleteDuda', Duda.deleteDuda);
}