const Project = require('../../models/projectModel');
const { projectUpdateValidation } = require('../../validations/projectValidation');

const updateProjectInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const { body } = req;

    const projectToUpdate = await Project.findOne({ _id: id });

    if (userId !== projectToUpdate.owner_id) {
      throw new Error('Access to update data denied');
    }

    const newInfo = await projectUpdateValidation(body);

    const updatedInfo = await Project.findByIdAndUpdate(id, newInfo, { new: true });

    res.status(200).json(updatedInfo);
  } catch (err) {
    next(err);
  }
};

module.exports = updateProjectInfo;
