const { Thing } = require("../../db/models");

exports.randomController = async (req, res, next) => {
  try {
    const randomThings = await Thing.findAll({
      attributes: ["id", "name"],
      where: {
        isTreasure: false,
      },
    });
    res.json(randomThings);
  } catch (error) {
    next(error);
  }
};

exports.treasureController = async (req, res, next) => {
  try {
    const treasureThings = await Thing.findAll({
      attributes: ["id", "name"],
      where: {
        isTreasure: true,
      },
    });
    res.json(treasureThings);
  } catch (error) {
    next(error);
  }
};

exports.thingCreate = async (req, res, next) => {
  try {
    const newThing = await Thing.create(req.body);
    res.status(201).json(newThing);
  } catch (error) {
    next(error);
  }
};
