const OldCar = require('../models/oldcar.model');

// Create Old Car
const CREATE_OLD_CAR = async (req, res) => {
    try {
        const { image, title, description, oemSpecs, colors, kmsOnOdometer, majorScratches, originalPaint, accidentsReported, previousBuyers, registrationPlace } = req.body;
        const seller = req.user._id

        const oldCar = new OldCar({
            image,
            title,
            description,
            seller,
            oemSpecs,
            colors,
            kmsOnOdometer,
            majorScratches,
            originalPaint,
            accidentsReported,
            previousBuyers,
            registrationPlace,
        });

        await oldCar.save();

        res.status(201).send({ message: ' Car created successfully', oldCar });
    } catch (error) {
        res.status(500).send({ error: 'Failed to create  Car' });
    }
};

const DELETECARS = async (req, res) => {
    const { seller } = req.user;
    const { listings } = req.query;
    try {
        const result = await OldCar.deleteMany({ _id: { $in: listings }, seller });
        const deletedCount = result.deletedCount;

        if (deletedCount > 0) {
            res.status(201).send(`${deletedCount} car listings deleted`);
        } else {
            res.staus(400).send('No car listings found for the seller');
        }
    } catch (error) {
        res.status(500).send('Failed to delete car listings');
    }
};


const EDITCAR = async (req, res) => {
    const { seller } = req.user;
    const { carId } = req.params;
    const updateFields = req.body;

    try {
        const carListing = await OldCar.findOne({ _id: carId, seller }).populate('seller');

        if (!carListing) {
            return res.status(404).send('Car listing not found');
        }

        carListing.set(updateFields);
        const updatedCar = await carListing.save();

        res.status(200).send(updatedCar);
    } catch (error) {
        res.status(500).send('Failed to update car listing');
    }
};

const GETALLCARS = async (req, res) => {
    try {
        const Query = {}
        const Sort = {}
        const { price, colors, mileage } = req.query

        const totalCount = await OEMSpecs.countDocuments(Query);
        const oems = await OEMSpecs.find(Query).populate('oemSpecs', { _id: 0 });
        res.status(200).send({ totalCount, oems });
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch OEMs' });
    }
};


module.exports = { CREATE_OLD_CAR, DELETECARS, EDITCAR };
