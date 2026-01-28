const Member = require('../../models/memberModel');
const Project = require('../../models/projectModel');

const removeMember = async (req, res, next) => {
  try {
    const { projectId, memberId } = req.params;
    const { userId } = req.user;

    const project = await Project.findOne({ _id: projectId });

    if (userId === project.owner_id) {
      await Member.deleteOne({ _id: memberId });
    }

    res.status(200).json({
      message: 'Member is removed from project'
    });
  } catch (err) {
    next(err);
  }
};

module.exports = removeMember;
