import 'dotenv/config'; 
import app from './app.js'; 
import { sequelize } from './models/index.js'; 

const PORT = process.env.PORT || 5000;

// Sync the database models
sequelize.sync({ force: false }) 
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Error syncing database:', err));
