const Eventos = require('./eventos_dao');

exports.createEventos=(req,res,next)=>{
    const newEvento = {
        id_evento: req.body.id_evento,
        fecha: req.body.fecha,
        id_actividad: req.body.id_actividad,
        id_estudiante: req.body.id_estudiante,
        check_download: req.body.check_download,
        check_inicio: req.body.check_inicio,
        check_fin: req.body.check_fin,
        check_answer: req.body.check_answer,
        count_video: req.body.count_video,
        check_video: req.body.check_video
    }
    //id_evento	data_start	hour_start	data_hours_end	hour_end
    //	id_actividad	id_estudiante	check_download	check_inicio	
    //check_fin	check_answer	count_video	check_video	check_document
    //	check_a1	check_a2	check_a3	check_profile

    console.log(newEvento);
    Eventos.create(newEvento,(err,evento)=>{
        if(err) return res.status(500).send('Server Error');
        res.send(evento);
    })
}
exports.loadEvento = (req,res,next)=>{
    const eventoData = {
        id_estudiante: req.body.id_estudiante,
    }
    Eventos.findOne({id_estudiante: eventoData.id_estudiante},(err,evento)=>{
        if(err) return res.status(500).send('Server Error');
        if(!evento){
            res.status(409).send({message:'Something Error'});
        }else{
            res.send(evento);
        }
    })
}
//id_evento	fecha	id_actividad	id_estudiante	
//check_download	check_inicio	check_fin	
//check_answer	count_video	check_video
