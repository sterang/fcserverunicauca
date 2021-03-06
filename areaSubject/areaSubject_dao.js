const mongoose = require('mongoose');
const areaSubjectSchema = require('./areaSubject_model');
/** @function areaSubjectSchema */
// Dao for Schema statics in database

areaSubjectSchema.statics={
    create: function(data, cb){
        const areaSubject = new this(data);
        areaSubject.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const areaSubjectModel = mongoose.model('AreaSubject', areaSubjectSchema);
module.exports = areaSubjectModel;