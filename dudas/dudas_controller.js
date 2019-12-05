const Duda = require('./dudas_dao');

exports.createDuda = async (req, res, next)=>{
    const newDuda = {
        id_duda: req.body.id_duda,
        id_actividad: req.body.id_actividad,
        id_estudiante: req.body.id_estudiante,
        pregunta: req.body.pregunta,
        respuesta: req.body.respuesta,
        estado_duda: req.body.estado_duda
    }
    console.log(newDuda);
    await Duda.create(newDuda,(err,duda)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({duda});
    })
}

exports.loadDuda= (req,res,next)=>{
    const dudaData={
        id_duda: req.body.id_duda
    }
    Duda.findOne({id_duda: dudaData.id_duda},(err, duda)=>{
        if(err) return res.status(500).send('Server Error');
        if(!duda){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({duda});
        }
    })
}

exports.allDudas = (req,res,next)=>{
    Duda.find(function(err, dudas){
        if(err) return res.status(500).send('Server Error');
        if(!dudas){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(dudas);
        }
    })
}

exports.uploadRespuestaDuda = async (req, res) => {
    const dudaData = {
        id_duda: req.body.id_duda
    }
    const dudaNewData = {
        respuesta: req.body.respuesta,
        estado_duda: req.body.estado_duda
    }
    await Duda.updateOne({id_duda: dudaData.id_duda}, {$set: dudaNewData});
    res.json({status: 'Informacion Duda Actualizado'});
}

exports.uploadEstadoDuda = async (req, res) => {
    const dudaData = {
        id_duda: req.body.id_duda
    }
    const dudaNewData = {
        estado_duda: req.body.estado_duda
    }
    await Duda.updateOne({id_duda: dudaData.id_duda}, {$set: dudaNewData});
    res.json({status: 'Informacion Duda Actualizada'});
}

exports.deleteDuda = async (req, res) => {
    //console.log(req.body)
    const dudaData = {
        id_duda: req.body.id_duda
    }
    await Duda.deleteOne({id_duda: dudaData.id_duda});
    res.json({Estado: 'Duda Eliminada' })
}

//id_duda  id_actividad  id_estudiante  estado_duda	
//pregunta  respuesta  