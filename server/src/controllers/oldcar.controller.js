const OldCar = require('../models/oldcar.model');

// Create Old Car
const CREATE_OLD_CAR = async (req, res) => {
    try {
        const { image, title, description, oemSpecs, colors, kmsOnOdometer, majorScratches, originalPaint, accidentsReported, previousBuyers, registrationPlace, price } = req.body;
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
            price
        });

        await oldCar.save();

        res.status(201).send({ message: ' Car created successfully', oldCar });
    } catch (error) {
        res.status(500).send({ error: 'Failed to create  Car', message: error.message });
    }
};

const DELETECARS = async (req, res) => {
    const seller = req.user._id;
    let { id } = req.query;
    if (!Array.isArray(id)) {
        id = [id];
    }
    try {
        const result = await OldCar.deleteMany({ _id: { $in: id }, seller });
        const deletedCount = result.deletedCount;

        if (deletedCount > 0) {
            res.status(201).send(`${deletedCount} car listings deleted`);
        } else {
            res.status(400).send('No car listings found for the seller');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const EDITCAR = async (req, res) => {
    const seller = req.user._id;
    const { carId } = req.params;
    const updateFields = req.body;
    console.log(carId, seller)
    try {
        const carListing = await OldCar.findOne({ _id: carId, seller }).populate('seller', { _id: 0, password: 0 });

        if (!carListing) {
            return res.status(404).send('Car listing not found');
        }

        carListing.set(updateFields);
        const updatedCar = await carListing.save();

        res.status(200).send(updatedCar);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const GETALLCARS = async (req, res) => {
    try {
        const Query = {}
        let Sort = {}
        const { q, lte, gte, sort, order, color } = req.query
        if (sort && order) {
            if (sort === "mileage") {
                Sort = { [`oemSpecs.${sort}`]: order == "desc" ? -1 : 1 }
                console.log(order == "desc", Sort)
            } else {
                Sort = { [sort]: order == "desc" ? -1 : 1 }
            }
        }

        if (q === "price" && lte) {
            Query.price = { $lte: parseInt(lte) };
        }
        if (q === "price" && gte) {
            Query.price = { $gte: parseInt(gte) };
        }
        if (color) {
            Query.colors = { $in: [color] }
        }
        console.log(order == "desc", Sort)
        const totalCount = await OldCar.countDocuments(Query);
        const oems = await OldCar.find(Query).populate('oemSpecs', { _id: 0 }).sort(Sort);
        res.status(200).send({ totalCount, oems });
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch OEMs', message: error.message });
    }
};

const GETCARBYID = async (req, res) => {
    try {
        let car = await OldCar.findOne({ _id: req.params.id })
        res.status(200).send(car)
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch OEMs', message: error.message });
    }
}

module.exports = { CREATE_OLD_CAR, DELETECARS, EDITCAR, GETALLCARS, GETCARBYID };
