const Task = require('../../models/taskModel');
const Member = require('../../models/memberModel');

const getTask = async (req, res, next) => {
  try {
    const { projectId, taskId } = req.params;
    const { userId } = req.user;

    const member = await Member.findOne({ project_id: projectId, user_id: userId });

    if (!member) {
      throw new Error("You don't have permission to access this task");
    }

    const task = await Task.findOne({ project_id: projectId, _id: taskId });

    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

module.exports = getTask;
