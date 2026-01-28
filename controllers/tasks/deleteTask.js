const Task = require('../../models/taskModel');
const Project = require('../../models/projectModel');

const removeTask = async (req, res, next) => {
  try {
    const { projectId, taskId } = req.params;
    const { userId } = req.user;

    const task = await Task.findOne({ project_id: projectId, _id: taskId });
    const project = await Project.findOne({ _id: projectId });

    if (!project) {
      throw new Error("Project not found");
    }

    if (!task) {
      throw new Error("Task not found");
    }

    if (task.assigned_to !== userId && project.owner_id !== userId) {
      throw new Error("You don't have permission to delete this task");
    }

    await Task.deleteOne({ project_id: projectId, _id: taskId });

    res.status(200).json({
      message: 'Task is deleted'
    });
  } catch (err) {
    next(err);
  }
};

module.exports = removeTask;
