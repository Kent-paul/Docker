const express = require('express');
const router = express.Router();
const { Employees } = require('../models');

router.get('/', (req, res) => {
    Employees.find({}, "firstName age")
        .then( employees => res.status(200).json(employees))
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
});

router.post('/new', (req, res) => {
    //Validation
    Employees.create(req.body)
        .then(E => res.status(201).json(E))
        .catch(err => res.status(500).json({
            message: err.message
        }))
});

router.put('/:id', (req, res) => {
    Employees.findByIdAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false })
        .then(E => res.status(200).json(E))
        .catch(err => res.status(500).json({
            message: "not found"
        }))
})
router.delete('/:id', (req, res) => {
    Employees.findByIdAndRemove(req.params.id)
        .then(E => res.status(200).json(E))
        .catch(err => res.status(500).json({
            message: "not found"
        }))
})


module.exports = router;
