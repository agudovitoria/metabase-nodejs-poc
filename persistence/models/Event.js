const mongoose = require('mongoose');

const eventSchema = require('../schemas/EventSchema');

module.exports = mongoose.model('Event', eventSchema);