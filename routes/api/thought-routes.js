const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require("../../controllers/thought-controller");

//  find all
router.get("/all", getAllThoughts);

//    find by id
router.get("/:id", getThoughtById);

//   create
router.post("/", createThought);

//  update
router.put("/:id", updateThought);

//  delete
router.delete("/:thoughId", deleteThought);

// add reaction
router.post("/add-reaction/:thoughtId", addReaction);

//  delete reaction
router.delete("/:userId/friends/:friendId", deleteReaction);

module.exports = router;