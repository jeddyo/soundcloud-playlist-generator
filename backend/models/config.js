module.exports = {
    development: {
      username: 'spotify_user',
      password: 'spotify_password',
      database: 'spotify_playlist_generator',
      host: 'localhost',
      dialect: 'postgres',
      define: {
        schema: 'public', 
      },
    },
    production: {
      username: 'your_prod_user',
      password: 'your_prod_password',
      database: 'your_prod_db',
      host: 'localhost',
      dialect: 'postgres',
      define: {
        schema: 'public', 
      },
    },
  };
  