const express = require("express");
const Nutrition = require("../models/nutrition.js");
const security = require("../middleware/security");

const router = express.Router();

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    //list all nutritions
    const { user } = res.locals;
    const nutritions = await Nutrition.listNutritionsForUser(user);
    return res.status(200).json({ nutritions });
  } catch (err) {
    next(err);
  }
});

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    //create new nutrition
    const { user } = res.locals;
    const nutrition = await Nutrition.createNutrition({
      user,
      nutrition: req.body,
    });
    return res.status(201).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
