const express = require('express');
const router = express.Router();

const Hunter = require('../models/Hunter');

//GET Route
router.get('/', async (req, res) => {
    try {
        const hunters = await Hunter.find();
        res.json(hunters);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

// POST Route
router.post('/', async (req, res) => {
    const hunter = new Hunter({
        name: req.body.name,
        rank: req.body.rank,
        weapon: req.body.weapon,
        email: req.body.email,
    });

    try {
        const newHunter = await hunter.save();
        res.status(201).json(newHunter);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE Route
router.delete('/:id', async (req, res) => {
    try {
        await Hunter.findByIdAndDelete(req.params.id);

        res.json({
            message: 'Hunter deleted'
        });
    }  catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// UPDATE Route
router.put('/:id', async (req, res) => {
    try {
        const updatedHunter = await Hunter.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedHunter);
    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router