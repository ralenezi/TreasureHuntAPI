module.exports = (sequelize, DataTypes) => {
  const Thing = sequelize.define("Thing", {
    name: {
      type: DataTypes.STRING,
    },
    isTreasure: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  return Thing;
};
