const Project = require('../../models/projectModel');

const removeProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
  
    const projectToDelete = await Project.findOne({ _id: id });

    if (!projectToDelete) {
      throw new Error('Project not found');
    }

    if (userId !== projectToDelete.owner_id) {
      throw new Error("You don't have permission to delete this project");
    }

    await Project.deleteOne({ _id: id });

    res.status(200).json({
      message: 'Project is removed'
    });
  } catch (err) {
    next(err);
  }
};

module.exports = removeProject;
