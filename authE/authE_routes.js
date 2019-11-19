const Estudiante = require('./authE_controller');
module.exports=(router)=> {
    router.post('/createEstudiante', Estudiante.createEstudiante);
    router.post('/loginEstudiante', Estudiante.loginEstudiante);
    router.get('/loadAllStudent', Estudiante.allStudents);
    router.post('/loadEstudiante', Estudiante.loadEstudiante);
    router.get('/loadAllEstudiantes', Estudiante.allEstudiantes);
    router.post('/uploadEstudiante', Estudiante.uploadEstudiante);
    router.post('/deleteEstudiante', Estudiante.deleteEstudiante);
}