import { Sequelize } from 'sequelize';
import UserModel from './User.js';
import PlaylistModel from './Playlist.js';
import 'dotenv/config';

// Check if DATABASE_URL is loaded
console.log('Database URL:', process.env.DATABASE_URL); // This should print the URL to the console

// Initialize Sequelize with the database connection URL
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://default_user:default_password@localhost:5432/default_db', {
  dialect: 'postgres',
  logging: false,
});

// Initialize models
const User = UserModel(sequelize, Sequelize.DataTypes);
const Playlist = PlaylistModel(sequelize, Sequelize.DataTypes);

// Define relationships
Playlist.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Playlist, { foreignKey: 'userId' });

// Sync database
sequelize
  .sync({ force: true }) // Use { alter: true } for safer schema updates without dropping tables
  .then(() => {
    console.log("Database synced successfully!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

// Export the initialized Sequelize instance and models
export { sequelize, User, Playlist };
