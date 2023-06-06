const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
    title: {
type:String
    },
    type: {
        type:String
    },
    startDate: {
        type:Date
    },
    endDate: [{
        type:Date
    }],
    description: {
        type:String,
    },
    image:{
        type:String
    },


}, { timestamps: true })


const Event = mongoose.model("Event", EventSchema)

module.exports = Event;