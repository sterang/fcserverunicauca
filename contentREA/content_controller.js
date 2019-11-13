const ContentREA = require('./content_dao');

exports.createContentREA = async (req, res, next)=>{
    const newContentREA = {
        id_CREA: req.body.id_CREA,
        tipo_CREA: req.body.tipo_CREA,
        id_docente: req.body.id_docente,
        id_materia: req.body.id_materia,
        id_grado: req.body.id_grado,
        nombre_CREA: req.body.nombre_CREA,
        urlrepositorio: req.body.urlrepositorio,
        descripcion_CREA: req.body.descripcion_CREA,
        en_uso: 0
    }
    console.log(newContentREA);
    await ContentREA.create(newContentREA,(err,content)=>{
        if(err) return res.status(500).send(`Server Error`);
        res.send({content});
    })
}
exports.loadContentREA= (req,res,next)=>{
    const contentData={
        id_CREA: req.body.id_contenidoREA
    }
    ContentREA.findOne({id_CREA: contentData.id_CREA},(err, content)=>{
        if(err) return res.status(500).send('Server Error');
        if(!content){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            //console.log("content",content);
            res.send({content});
        }
    })
}

exports.allContent = (req,res,next)=>{
    ContentREA.find(function(err, contents){
        if(err) return res.status(500).send('Server Error');
        if(!contents){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send(contents);
        }
    })
}
exports.SearchContentREA= (req,res,next)=>{
    const contentData={
        nombre_CREA: req.body.nombre_CREA,
    }
    //contentData.nombre_CREA /^Sumar/i
    ContentREA.find({nombre_CREA: { $regex: contentData.nombre_CREA, $options: "xi" }},(err, content)=>{
        if(err) return res.status(500).send('Server Error');
        if(!content){
            res.status(409).send({message:`Something Error ${err}`});
        }else{
            res.send({content});
        }
    })
}
exports.allContentMovil = (req,res,next)=>{
    ContentREA.find(function(err, contents){
        if(err) return res.status(500).send('Server Error');
        if(!contents){
            res.status(409).send({message:'Something Error'});
        } else{
            res.send({contents});
        }
    })
}

exports.newLoadContentREA = async (req, res) => {
    const contentsData = await ContentREA.find();
    res.json(contentsData);
}

exports.deleteContentREA = async (req, res) => {
    //console.log(req.body)
    const contentData = {
        id_CREA: req.body.id_CREA
    }
    await ContentREA.deleteOne({id_CREA: contentData.id_CREA});
    res.json({Estado: 'Contenido Eliminado' })
}

exports.uploadEstadoContentREA = async (req,res) => {
    const contentData = {
        id_CREA: req.body.id_CREA
    }
    const contentNewEstadoData = {
        en_uso: req.body.en_uso
    }
    await ContentREA.updateOne({id_CREA: contentData.id_CREA}, {$set: contentNewEstadoData}, {new: true});
    res.json({status: 'Estado Contenido Actualizado'});
} 

//id_CREA	tipo_CREA	id_materia	grado10	
//grado11	
//nombre_CREA	urlrepositorio	descripcion_CREA
