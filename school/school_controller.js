const School = require('./school_dao');

exports.createSchool = async (req, res, next)=>{
    const newSchool = {
        id_colegio: req.body.id_colegio,
        NIT: req.body.NIT,
        nombre_colegio: req.body.nombre_colegio,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        tipo_colegio: req.body.tipo_colegio,
        calendario: req.body.calendario,
        rector: req.body.rector,
        colegioActivo: req.body.colegioActivo
    }
    console.log(newSchool);
    await School.create(newSchool,(err,school)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({school});
    })
}
exports.loadSchool= (req,res,next)=>{
    const schoolData={
        id_colegio: req.body.id_colegio
    }
    School.findOne({id_colegio: schoolData.id_colegio},(err, school)=>{
        if(err) return res.status(500).send('Server Error');
        if(!school){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({school});
        }
    })
}
exports.allSchools = (req,res,next)=>{
    School.find(function(err, schools){
        if(err) return res.status(500).send('Server Error');
        if(!schools){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(schools);
        }
    })
}

exports.newLoadSchools = async (req, res) => {
    const schoolsData = await School.find();
    res.json(schoolsData);
}

exports.uploadSchool = async (req, res) => {
    const schoolData = {
        id_colegio: req.body.id_colegio
    }
    const schoolNewData = {
        NIT: req.body.NIT,
        nombre_colegio: req.body.nombre_colegio,
        ciudad: req.body.ciudad,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        tipo_colegio: req.body.tipo_colegio,
        calendario: req.body.calendario,
        rector: req.body.rector,
    }
    await School.updateOne({id_colegio: schoolData.id_colegio}, {$set: schoolNewData}, {new: true});
    res.json({status: 'Informacion Colegio Actualizado'});
}

exports.deleteSchool = async (req, res) => {
    console.log(req.body)
    const schoolData = {
        id_colegio: req.body.id_colegio
    }
    await School.deleteOne({id_colegio: schoolData.id_colegio});
    res.json({Estado: 'Colegio Eliminada' })
}

//id_materia	id_colegio

//nombre_materia	url_imagen	
