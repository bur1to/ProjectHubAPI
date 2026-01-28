const Project = require('../../models/projectModel');
const Member = require('../../models/memberModel');
const { projectCreateValidation } = require('../../validations/projectValidation');

const createProject = async (req, res, next) => {
  try {
    const { body } = req;
    const { userId } = req.user;

    const newParams = await projectCreateValidation(body);
    newParams.owner_id = userId;

    const newProject = await Project.create(newParams);

    res.status(200).json(newProject);
  } catch (err) {
    next(err);
  }
};

module.exports = createProject;
