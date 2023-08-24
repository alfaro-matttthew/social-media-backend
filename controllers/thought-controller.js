const { Thought, Reaction } = require("../models");

const getAllThoughts = async (req, res) => {
  try {
    const result = await Thought.find({});
    res.status(200).json(result);
  } catch (err) {
    console.log("\x1b[35m", "!!! ERROR: thought-controller.getAllThoughts !!!");
    console.log(err);
    res.status(500).send({ message: "Internal Server Error on 'getAllThoughts' function" });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const result = await Thought.findById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    console.log("\x1b[35m", "!!! ERROR: thought-controller.getThoughtByd !!!");
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const createThought = async (req, res) => {
  try {
    const result = await Thought.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    console.log("\x1b[35m", "!!! ERROR: thought-controller.createThought !!!");
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const updateThought = async (req, res) => {
  try {
    const result = await Thought.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (err) {
    console.log("\x1b[35m", "!!! ERROR: thought-controller.updateThought !!!");
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteThought = async (req, res) => {
  try {
    const result = await Thought.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    console.log("\x1b[35m", "!!! ERROR: thought-controller.deleteThought !!!");
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const addReaction = async (req, res) => {
  try {
    const result = await Thought.findByIdAndDelete(
      req.params.thoughId,
      {
        $push: {
          reaction: req.body,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteReaction = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(
      req.params.thoughtId,
      {
        $pull: {
          friends: req.params.reactionId,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
};
