const Project = require('../../models/projectModel');

const getOneProject = async (req, res, next) => {
  try {
    const { id } = req.params;

    const project = await Project.findOne({ _id: id });

    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};

module.exports = getOneProject;
