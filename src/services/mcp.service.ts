import { MCPRequest, MCPResponse, MCPPatentDetailsContext, MCPPatentSearchContext } from '../types/mcp.types';
import { searchUSPTO, getPatentDetailsFromAPI } from './uspto.service';

export const handleMCPRequest = async (request: MCPRequest): Promise<MCPResponse> => {
  try {
    if (isPatentSearchRequest(request)) {
      const results = await searchUSPTO(request.context.query);
      return {
        response: JSON.stringify(results)
      };
    } else if (isPatentDetailsRequest(request)) {
      const details = await getPatentDetailsFromAPI(request.context.patentNumber);
      return {
        response: JSON.stringify(details)
      };
    }

    throw new Error('Unsupported MCP request type');
  } catch (error) {
    return {
      response: '',
      error: {
        code: 'MCP_ERROR',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      }
    };
  }
};

const isPatentSearchRequest = (request: MCPRequest): request is MCPRequest & { context: MCPPatentSearchContext } => {
  return request.context.type === 'patent_search';
};

const isPatentDetailsRequest = (request: MCPRequest): request is MCPRequest & { context: MCPPatentDetailsContext } => {
  return request.context.type === 'patent_details';
}; 