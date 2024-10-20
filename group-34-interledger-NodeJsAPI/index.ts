import dotenv from 'dotenv';
import { intializeDB } from './src/database/database-init.js';
import app from './src/server.js';

dotenv.config();

intializeDB().then(() => {
   console.log('Database connection established');
}).catch((error) => {
   console.error('Error connecting to the database', error);
   process.exit(1); // Exit the app if DB connection fails
});

const port = Number(process.env.PORT || 8080);
app.listen(port, () => {
   console.log('Express server started on port: ' + port);
});