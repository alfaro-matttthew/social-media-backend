const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

//  find all
router.get("/all", getAllUsers);

//    find by id
router.get("/:id", getUserById);

//   create
router.post("/", createUser);

//  update
router.put("/:id", updateUser);

//  delete
router.delete("/:id", deleteUser);

// add friend
router.post("/:userId/friends/:friendId", addFriend);

//  delete friend
router.delete("/:userId/friends/:friendId", deleteFriend);

module.exports = router;
