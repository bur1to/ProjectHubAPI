const Task = require('../../models/taskModel');
const Member = require('../../models/memberModel');
const { taskCreateValidation } = require('../../validations/taskValidation');

const createProjectTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const { body } = req;

    const taskParams = await taskCreateValidation(body);

    const user = await Member.findOne({ project_id: id, user_id: userId });

    if (user.role !== 'member' && user.role !== 'owner') {
      throw new Error("You don't have permission to create a task");
    }

    taskParams.project_id = id;
    taskParams.assigned_to = userId;
    taskParams.createdAt = new Date();

    const newTask = await Task.create(taskParams);

    res.status(200).json(newTask);
  } catch (err) {
    next(err);
  }
};

module.exports = createProjectTask;
