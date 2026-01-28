const registration = require('./users/createUser');
const updateProfileInfo = require('./users/updateUser');
const getAllUsers = require('./users/getUsers');
const getUserProfile = require('./users/getUser');
const removeUser = require('./users/deleteUser');
const login = require('./users/login');

const createProjectTask = require('./tasks/createTask');
const removeTask = require('./tasks/deleteTask');
const getTask = require('./tasks/getTask');
const getAllProjectTasks = require('./tasks/getTasks');
const updateTaskInfo = require('./tasks/updateTask');

const createProject = require('./projects/createProject');
const removeProject = require('./projects/deleteProject');
const getOneProject = require('./projects/getProject');
const getAllUserProjects = require('./projects/getProjects');
const updateProjectInfo = require('./projects/updateProject');

const addMember = require('./members/addMember');
const getMembers = require('./members/getMembers');
const removeMember = require('./members/deleteMember');

module.exports = {
  registration,
  updateProfileInfo,
  getAllUsers,
  getUserProfile,
  removeUser,
  login,

  createProjectTask,
  removeTask,
  getTask,
  getAllProjectTasks,
  updateTaskInfo,

  createProject,
  removeProject,
  getOneProject,
  getAllUserProjects,
  updateProjectInfo,

  addMember,
  getMembers,
  removeMember
};
