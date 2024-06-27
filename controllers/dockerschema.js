// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Dockerschema = require('../models/dockerschemaSchema');

// CRUD operations for dockerschema
// Create Controller 
const createDockerschema = async (req, res) => { 
    const { userfieldName, password, documents } = req.body;
    try {
        const dockerschema = await Dockerschema.create({ userfieldName, password, documents }) 
        await dockerschema.save();
        res.status(201).json(dockerschema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateDockerschema = async (req, res) => { 
    const _id=req.params.id;
    const { userfieldName, password, documents } = req.body;
    try {
        const dockerschema = await Dockerschema.findByIdAndUpdate( _id, { userfieldName, password, documents },{new:true}) 
        if (!dockerschema) {
            return res.status(404).send('dockerschema not found');
        }
        await dockerschema.save();
        res.status(201).json(dockerschema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteDockerschema = async (req, res) => { 
    const _id=req.params.id;
    try {
        const dockerschema = await Dockerschema.findById(_id)
        if (!dockerschema) {
            return res.status(404).send('dockerschema not found');
        }
        await Dockerschema.deleteOne({_id: _id})
        await dockerschema.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getDockerschema = async (req, res) => { 
    const _id=req.params.id;
    try {
        const dockerschema = await Dockerschema.findById(_id)
        if (!dockerschema) {
            return res.status(404).send('dockerschema not found');
        }
        res.status(201).json(dockerschema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllDockerschema = async (req, res) => { 
    try {
        const dockerschema = await Dockerschema.find({})
        if (!dockerschema) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(dockerschema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createDockerschema,
    updateDockerschema,
    deleteDockerschema,
    getDockerschema,
    getAllDockerschema
}