const Member = require('../../models/memberModel');
const Project = require('../../models/projectModel');
const User = require('../../models/userModel');
const memberAddValidation = require('../../validations/memberValidation');

const addMember = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const { body } = req;

    const project = await Project.findOne({ _id: id });

    if (userId !== project.owner_id) {
      throw new Error("You can't add new member");
    }

    const searchInfo = await memberAddValidation(body);

    const member = await User.findOne({ email: searchInfo.email });

    const memberExist = await Member.findOne({ project_id: id, user_id: member._id });

    if (memberExist) {
      throw new Error("Member already exists");
    }

    const memberParams = {
      project_id: id,
      user_id: member._id,
      role: 'member'
    };

    await Member.create(memberParams);

    res.status(200).json({
      message: 'Member is successfully added to the project'
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addMember;
