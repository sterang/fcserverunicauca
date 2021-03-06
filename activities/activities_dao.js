const mongoose = require('mongoose');
const activitiesSchema = require('./activities_model');
/** @function activitiesSchema */
// Dao for Schema statics in database
activitiesSchema.statics={
    create: function(data, cb){
        const activity = new this(data);
        activity.save(cb);
    },
    load: function(query,cb){
        this.find(query, cb);
    }
}

const activitiesModel = mongoose.model('Activities',activitiesSchema);

module.exports = activitiesModel;