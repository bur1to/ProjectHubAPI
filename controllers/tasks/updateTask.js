const Task = require('../../models/taskModel');
const Project = require('../../models/projectModel');
const { taskUpdateValidation } = require('../../validations/taskValidation');

const updateTaskInfo = async (req, res, next) => {
  try {
    const { projectId, taskId } = req.params;
    const { body } = req;
    const { userId } = req.user;

    const project = await Project.findOne({ _id: projectId });
    const task = await Task.findOne({ _id: taskId, project_id: projectId });

    if (!project) {
      throw new Error("Project not found");
    }

    if (!task) {
      throw new Error("Task not found");
    }

    if (task.assigned_to !== userId && project.owner_id !== userId) {
      throw new Error("You don't have permission to edit task info");
    }

    const validatedParams = await taskUpdateValidation(body);

    const newTaskInfo = await Task.findOneAndUpdate(
      { _id: taskId, project_id: projectId },
      validatedParams,
      { new: true }
    );

    const taskInfo = {
      title: newTaskInfo.title,
      description: newTaskInfo.description,
      status: newTaskInfo.status,
      createdAt: newTaskInfo.createdAt
    };

    res.status(200).json(taskInfo);
  } catch (err) {
    next(err);
  }
};

module.exports = updateTaskInfo;
