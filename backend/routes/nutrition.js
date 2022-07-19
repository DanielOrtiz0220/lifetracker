const express = require("express");
const Nutrition = require("../models/nutrition.js");
const security = require("../middleware/security");

const router = express.Router();

router.get(
  "/:userId",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    try {
      //list all nutritions
      const userId = req.params.user_id;
      const nutritions = await Nutrition.getNutritions(userId);
      return res.status(200).json({ nutritions });
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/:userId",
  security.requireAuthenticatedUser,
  async (req, res, next) => {
    try {
      //create new nutrition
      const { user } = res.locals;
      user[user_id] = req.params.user_id;
      const nutrition = await Nutrition.createNutrition({
        user,
        nutrition: req.body,
      });
      return res.status(201).json({ nutrition });
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
