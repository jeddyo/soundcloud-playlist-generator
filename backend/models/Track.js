module.exports = (sequelize, DataTypes) => {
    const Track = sequelize.define('Track', {
      title: { type: DataTypes.STRING, allowNull: false },
      artist: { type: DataTypes.STRING, allowNull: false },
      genre: { type: DataTypes.STRING },
      popularity: { type: DataTypes.INTEGER },
    });
  
    return Track;
  };
  