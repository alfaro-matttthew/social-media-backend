const { User } = require("../models");

const getAllUsers = async (req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await User.find({}).populate("friends");
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getUserById = async (req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await User.findById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await User.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const addFriend = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $push: {
          friends: req.params.friendId,
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

const deleteFriend = async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $pull: {
          friends: req.params.friendId,
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
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
