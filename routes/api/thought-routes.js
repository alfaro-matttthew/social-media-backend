const router = require('express').Router();
const {} = require('../../controllers/user-controller');
const { User } = require("../../models");


router.get('/all-items', async (req, res) => {
    try {
      // Using model in route to find all documents that are instances of that model
      const result = await User.find({});
      res.status(200).json(result);
    } catch (err) {
      res.status(500).send({ message: 'Internal Server Error' })
    }
  });

module.exports = router;