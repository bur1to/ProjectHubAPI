const Task = require('../../models/taskModel');
const Member = require('../../models/memberModel');

const getAllProjectTasks = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { userId } = req.user;

    const member = await Member.findOne({ project_id: projectId, user_id: userId });

    if (!member) {
      throw new Error("You aren't a member of project and you can't receive task list");
    }

    const tasks = await Task.find({ project_id: projectId }, {
      title: 1,
      description: 1,
      status: 1,
      createdAt: 1
    });

    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllProjectTasks;
