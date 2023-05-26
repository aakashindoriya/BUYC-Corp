const mongoose = require('mongoose');

const oldCarSchema = new mongoose.Schema(
    {
        seller: { type: mongoose.Schema.Types.ObjectId, ref: 'BUser', required: true },
        oemSpecs: { type: mongoose.Schema.Types.ObjectId, ref: 'OEMSpecs', required: true },
        image: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: Number,
        colors: [{ type: String }],
        kmsOnOdometer: { type: Number },
        majorScratches: { type: Boolean },
        originalPaint: { type: Boolean },
        accidentsReported: { type: Number },
        previousBuyers: { type: Number },
        registrationPlace: { type: String },
    },
    { timestamps: true }
);

const OldCar = mongoose.model('OldCar', oldCarSchema);

module.exports = OldCar;
