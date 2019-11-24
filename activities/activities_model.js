const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const activitySchema = new Schema({
    id_actividad:{
        type: Number,
        required: true,
        trim: true,
    },
    id_colegio:{
        type: Number,
        required: true,
        trim: true,
    },
    id_docente:{
        type: Number,
        required: true,
        trim: true,
    },
    id_materia:{
        type: Number,
        required: true,
        trim: true,
    },
    id_grado:{
        type: Number,
        required: true,
        trim: true,
    },
    id_competencia:{
        type: Number,
        required: true,
        trim: true,
    },
    titulo_actividad:{
        type: String,
        required: true,
        trim: true,
    },
    descripcion_actividad:{
        type: String,
        trim: true,
    },
    id_contenidoREA:{
        type: Number,
        trim: true,
    },
    video:{
        type: Number,
        trim: true,
    },
    urlvideo:{
        type: String,
        trim: true,
    },
    documento:{
        type: Number,
        trim: true,
    },
    urldocumento:{
        type: String,
        trim: true,
    },
    audio:{
        type: Number,
        trim: true,
    },
    urlaudio:{
        type: String,
        trim: true,
    },
    html:{
        type: Number,
        trim: true,
    },
    urlhtml:{
        type: String,
        trim: true,
    },
    id_taller:{
        type: Number,
        trim: true,
    },
    taller:{
        type: Number,
        trim: true,
    },
    urltaller:{
        type: String,
        trim: true,
    },
    descripcion_test:{
        type: String,
        trim: true,
    },
    Q1:{
        type: String,
        trim: true,
    },
    A11:{
        type: String,
        trim: true,
    },
    A12:{
        type: String,
        trim: true,
    },
    A13:{
        type: String,
        trim: true,
    },
    A14:{
        type: String,
        trim: true,
    },
    CA1:{
        type: Number,
        trim: true,
    },
    Q2:{
        type: String,
        trim: true,
    },
    A21:{
        type: String,
        trim: true,
    },
    A22:{
        type: String,
        trim: true,
    },
    A23:{
        type: String,
        trim: true,
    },
    A24:{
        type: String,
        trim: true,
    },
    CA2:{
        type: Number,
        trim: true,
    },
    Q3:{
        type: String,
        trim: true,
    },
    A31:{
        type: String,
        trim: true,
    },
    A32:{
        type: String,
        trim: true,
    },
    A33:{
        type: String,
        trim: true,
    },
    A34:{
        type: String,
        trim: true,
    },
    CA3:{
        type: Number,
        trim: true,
    },
    evaluacion:{
        type: Number,
        trim: true,
    },
    descripcion_evaluacion:{
        type: String,
        trim: true,
    },
    EQ1:{
        type: String,
        trim: true,
    },
    EA11:{
        type: String,
        trim: true,
    },
    EA12:{
        type: String,
        trim: true,
    },
    EA13:{
        type: String,
        trim: true,
    },
    EA14:{
        type: String,
        trim: true,
    },
    ECA1:{
        type: Number,
        trim: true,
    },
    EQ2:{
        type: String,
        trim: true,
    },
    EA21:{
        type: String,
        trim: true,
    },
    EA22:{
        type: String,
        trim: true,
    },
    EA23:{
        type: String,
        trim: true,
    },
    EA24:{
        type: String,
        trim: true,
    },
    ECA2:{
        type: Number,
        trim: true,
    },
    EQ3:{
        type: String,
        trim: true,
    },
    EA31:{
        type: String,
        trim: true,
    },
    EA32:{
        type: String,
        trim: true,
    },
    EA33:{
        type: String,
        trim: true,
    },
    EA34:{
        type: String,
        trim: true,
    },
    ECA3:{
        type: Number,
        trim: true,
    }
}, {timestamps: true});

module.exports = activitySchema;


//id_actividad	id_colegio	id_docente	id_materia	id_competencia	titulo_actividad	
//descripcion_materia	video	urlvideo	lectura	urllectura	test	html	urlhtml	grado
