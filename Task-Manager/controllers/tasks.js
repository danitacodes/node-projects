const Task = require("../models/Task.js");
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error');


const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  
});

const createTasks = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
 
});

const getOneTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
        return next(createCustomError(`No task with ID: ${taskID}`, 404))
      
    }
    res.status(200).json({ task });
 
});

const updateTask = asyncWrapper (async (req, res) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators: true,
        })
    
        if (!task) {
            return next(createCustomError(`No task with ID: ${taskID}`, 404))
        }
        res.status(200).json({task})

});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
        return next(createCustomError(`No task with ID: ${taskID}`, 404))
    }
    res.status(200).json({ task });
 
});

module.exports = {
  getAllTasks,
  createTasks,
  getOneTask,
  updateTask,
  deleteTask,
};
