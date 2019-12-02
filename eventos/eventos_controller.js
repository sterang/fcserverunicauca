const Eventos = require('./eventos_dao');

exports.createEventos=(req,res,next)=>{
    const newEvento = {
        id_evento: req.body.id_evento,
        data_start: req.body.data_start,
        hour_start: req.body.hour_start,
        data_end: req.body.data_end,
        hour_end: req.body.hour_end,
        id_actividad: req.body.id_actividad,
        id_estudiante: req.body.id_estudiante,
        check_download: req.body.check_download,
        check_inicio: req.body.check_inicio,
        check_fin: req.body.check_fin,
        check_answer: req.body.check_answer,
        count_video: req.body.count_video,
        check_video: req.body.check_video,
        check_document: req.body.check_document,
        check_a1: req.body.check_a1,
        check_a2: req.body.check_a2,
        check_a3: req.body.check_a3,
        check_profile: req.body.check_profile,
        check_Ea1: req.body.check_Ea1,
        check_Ea2: req.body.check_Ea2,
        check_Ea3: req.body.check_Ea3,
        oculto: 0
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
exports.allEventos = (req,res,next)=>{
    Eventos.find(function(err, eventStudents){
        if(err) return res.status(500).send('Server Error');
        if(!eventStudents){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(eventStudents);
        }
    })
}
exports.generateMetrics=(req,res,next)=>{
    const contentData={
        id_estudiante: req.body.id_estudiante,
    }
    Eventos.find({id_estudiante: contentData.id_estudiante},(err,eventsMetrics)=>{
        if(err) return res.status(500).send('Server Error');
        if(!eventsMetrics){
            res.status(409).send({message:'Something Error'});
        }else{
            var dataEvents = eventsMetrics;
            console.log(dataEvents);
            res.send(dataEvents);
        }
    })
}

exports.uploadEvento = async (req, res) => {
    const eventoData={
        id_evento: req.body.id_evento
    }
    const eventoNewData = {
        data_start: req.body.data_start,
        hour_start: req.body.hour_start,
        data_end: req.body.data_end,
        hour_end: req.body.hour_end,
        id_actividad: req.body.id_actividad,
        id_estudiante: req.body.id_estudiante,
        check_download: req.body.check_download,
        check_inicio: req.body.check_inicio,
        check_fin: req.body.check_fin,
        check_answer: req.body.check_answer,
        count_video: req.body.count_video,
        check_video: req.body.check_video,
        check_document: req.body.check_document,
        check_a1: req.body.check_a1,
        check_a2: req.body.check_a2,
        check_a3: req.body.check_a3,
        check_profile: req.body.check_profile,
        check_Ea1: req.body.check_Ea1,
        check_Ea2: req.body.check_Ea2,
        check_Ea3: req.body.check_Ea3,
        oculto: req.body.oculto
    }
    await Eventos.updateOne({id_evento: eventoData.id_evento}, {$set: eventoNewData}, {new: true});
    res.json({status: 'Evento Actualizado'});
}

exports.uploadEstadoEvento = async (req, res) => {
    const eventoData={
        id_evento: req.body.id_evento
    }
    const eventoNewData = {
        oculto: req.body.oculto
    }
    await Eventos.updateOne({id_evento: eventoData.id_evento}, {$set: eventoNewData}, {new: true});
    res.json({status: 'Estado Evento Actualizado'});
}
//id_evento	fecha	id_actividad	id_estudiante	
//check_download	check_inicio	check_fin	
//check_answer	count_video	check_video
