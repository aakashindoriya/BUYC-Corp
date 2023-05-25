const OEMSpecs = require("../models/oem.model")

const ADDOEM = async (req, res) => {
    try {
        const {
            model,
            year,
            listPrice,
            colors,
            mileage,
            power,
            maxSpeed,
        } = req.body
        const provider = req.user._id
        const oem = await OEMSpecs.create({ model, year, listPrice, colors, mileage, power, maxSpeed, provider })
        return res.status(201).send({ message: "OEM created successfully", oem })
    } catch (error) {
        res.status(500).send({ message: 'Failed to create  OEM', error: error.message });
    }
}
const GETALLOEMS = async (req, res) => {
    try {
        const Query = {}
        const { model } = req.query
        if (model) {
            const regexPattern = new RegExp(model, 'i');
            Query.model = regexPattern
        }
        const totalCount = await OEMSpecs.countDocuments(Query);
        const oems = await OEMSpecs.find(Query).populate('provider', { _id: 0, password: 0 });
        res.status(200).send({ totalCount, oems });
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch OEMs' });
    }
};
const GETOEMBYID = async (req, res) => {
    const { id } = req.params;

    try {
        const oem = await OEMSpecs.findById(id).populate('provider', { _id: 0, password: 0 });
        if (!oem) {
            return res.status(404).send({ error: 'OEM not found' });
        }
        res.status(200).send(oem);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch OEM' });
    }
};



module.exports = { ADDOEM, GETALLOEMS, GETOEMBYID }