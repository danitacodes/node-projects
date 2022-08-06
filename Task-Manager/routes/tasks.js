const express = require('express');
const router = express.Router();

const {getAllTasks, createTasks, updateTask, deleteTask, getOneTask} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getOneTask).patch(updateTask).delete(deleteTask)

module.exports = router;