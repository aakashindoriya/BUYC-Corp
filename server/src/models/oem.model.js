const mongoose = require('mongoose');

const oemSchema = new mongoose.Schema(
    {
        model: { type: String, required: true },
        year: { type: Number, required: true },
        listPrice: { type: Number, required: true },
        colors: [{ type: String }],
        mileage: { type: Number },
        power: { type: String },
        maxSpeed: { type: String },
        provider: { type: mongoose.Schema.Types.ObjectId, ref: 'BUser', required: true },

    },
    { timestamps: true }
);

const OEMSpecs = mongoose.model('OEMSpecs', oemSchema);

module.exports = OEMSpecs;
