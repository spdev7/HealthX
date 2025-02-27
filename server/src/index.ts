import express from 'express';
import exampleRoute from './routes/exampleRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/example', exampleRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});