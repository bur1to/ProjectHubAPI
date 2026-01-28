const express = require('express');
const tokenVerify = require('../middlewares/authorization');

const {
  registration,
  updateProfileInfo,
  getAllUsers,
  getUserProfile,
  removeUser,
  login
} = require('../controllers/index');

const router = express.Router();

router.post('/register', registration);
router.post('/login', login);

router.get('/', getAllUsers);

router.use(tokenVerify);

router.get('/:id', getUserProfile);

router.put('/:id', updateProfileInfo);

router.delete('/:id', removeUser);

module.exports = router;
