import { Router } from 'express';
import { handleMCPEndpoint } from '../controllers/mcp.controller';

const router = Router();

// MCP protocol endpoint
router.post('/', handleMCPEndpoint);

export const mcpRoutes = router; 