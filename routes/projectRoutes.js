const express = require('express');
const tokenVerify = require('../middlewares/authorization');

const {
  createProject,
  removeProject,
  getOneProject,
  getAllUserProjects,
  updateProjectInfo,

  addMember,
  getMembers,
  removeMember,

  createProjectTask,
  removeTask,
  getTask,
  getAllProjectTasks,
  updateTaskInfo
} = require('../controllers/index');

const router = express.Router();

router.use(tokenVerify);

router.get('/', getAllUserProjects);
router.get('/:id', getOneProject);
router.get('/:id/members', getMembers);
router.get('/:projectId/tasks', getAllProjectTasks);
router.get('/:projectId/task/:taskId', getTask);

router.post('/', createProject);
router.post('/:id/member', addMember);
router.post('/:id/task', createProjectTask);

router.put('/:id', updateProjectInfo);
router.put('/:projectId/task/:taskId', updateTaskInfo);

router.delete('/:id', removeProject);
router.delete('/:projectId/members/:memberId', removeMember);
router.delete('/:projectId/task/:taskId', removeTask);

module.exports = router;
