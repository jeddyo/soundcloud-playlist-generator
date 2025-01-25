const PlaylistModel = (sequelize, DataTypes) => {
  return sequelize.define('Playlist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'Playlists', 
  });
};

export default PlaylistModel;
