const Member = require('../../models/memberModel');

const getMembers = async (req, res, next) => {
  try {
    const { id } = req.params;

    const members = await Member.find({ project_id: id });

    res.status(200).json(members);
  } catch (err) {
    next(err);
  }
};

module.exports = getMembers;
