const Project = require('../../models/projectModel');
const Member = require('../../models/memberModel');

const getAllUserProjects = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const ownerProjects = await Project.find({ owner_id: userId });

    const member = await Member.find({ user_id: userId });
    const projectsIds = member.map((m) => m.project_id);

    const memberProjects = await Project.find({ _id: { $in: projectsIds } });

    const result = {
      owner: ownerProjects,
      member: memberProjects
    };

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllUserProjects;
