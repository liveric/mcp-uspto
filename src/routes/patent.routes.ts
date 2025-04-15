import { Router } from 'express';
import { searchPatents, getPatentDetails } from '../controllers/patent.controller';

const router = Router();

// MCP endpoints
router.post('/search', searchPatents);
router.get('/:patentNumber', getPatentDetails);

export const patentRoutes = router; 