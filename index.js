import express from 'express';
import dotenv from 'dotenv';
import './config/db.js'; // Ensure this path is correct
import userRoutes from './routes/userRoutes.js'; // Ensure this path is correct

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;  

app.use(express.json());

app.use('/api/user', userRoutes); 
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app