const mongoose = require('mongoose');
const schoolSchema = require('./school_model');
/** @function schoolSchema */
// Dao for Schema statics in database
schoolSchema.statics={
    create: function(data, cb){
        const school = new this(data);
        school.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const schoolModel = mongoose.model('School',schoolSchema);
module.exports = schoolModel;