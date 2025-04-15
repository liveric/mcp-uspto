import express from 'express';
import dotenv from 'dotenv';
import { patentRoutes } from './routes/patent.routes';
import { mcpRoutes } from './routes/mcp.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/patents', patentRoutes);
app.use('/api/mcp', mcpRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 