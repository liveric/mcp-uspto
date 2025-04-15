import { Request, Response, RequestHandler } from 'express';
import { handleMCPRequest } from '../services/mcp.service';
import { MCPRequest } from '../types/mcp.types';

export const handleMCPEndpoint: RequestHandler = async (req, res) => {
  try {
    const mcpRequest: MCPRequest = req.body;
    
    // Validate MCP request
    if (!mcpRequest.model || !mcpRequest.context || (mcpRequest.context.type !== 'patent_details' && mcpRequest.context.type !== 'patent_search')) {
      res.status(400).json({
        error: {
          code: 'INVALID_REQUEST',
          message: 'Invalid MCP request format'
        }
      });
      return;
    }

    const response = await handleMCPRequest(mcpRequest);
    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: error instanceof Error ? error.message : 'Internal server error'
      }
    });
  }
}; 