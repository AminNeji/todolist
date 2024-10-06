const express = require('express');
const task = require('../Models/TaskModel');
const createTask = async (req, res) => {
    try {
        const createdTask = new task(req.body);
        const savedTask = await createdTask.save();
        res.status(200).json(savedTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getTaskbyId = async (req, res) => {
    try {
        const foundTask = await task.findById(req.params.id);
        res.status(200).json(foundTask);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
const getAllTasks = async (req, res) => {
    try {
        const tasks = await task.find();
        res.status(200).json(tasks);
    }
    catch (err) {
        res.status(500).json("No tasks found");
    }
}
const updateTask = async (req, res) => {
    try {
        const foundTask = await task.findById(req.params.id);
        if (!foundTask) {
            return res.status(404).json("Task not found");
        }

        const updatedTask = await task.findByIdAndUpdate(
            req.params.id,
            { isCompleted: req.body.isCompleted },
            { new: true }
        );
        return res.status(200).json(updatedTask);
    } catch (err) {
        console.error("Error updating task:", err);
        return res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
};


const deleteTask = async (req, res) => {
    try {
        const deletedtask=await task.findByIdAndDelete(req.params.id);
        if (!deletedtask) {
            return res.status(404).json("Task not found");
        }
        return res.status(200).json("Task deleted");
    }
    catch (err) {
        return res.status(500).json(err);
    }
}
module.exports = {
    createTask,
    getTaskbyId,
    getAllTasks,
    updateTask,
    deleteTask
}