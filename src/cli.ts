#!/usr/bin/env node
import axios from 'axios';

const MCP_URL = 'http://localhost:3000/api/mcp';

async function queryMCP(query: string) {
  try {
    const response = await axios.post(MCP_URL, {
      model: 'claude-3',
      context: {
        type: 'patent_search',
        query
      }
    });

    if (response.data.error) {
      console.error('Error:', response.data.error.message);
      return;
    }

    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error:', error.response?.data?.error?.message || error.message);
    } else {
      console.error('Error:', error);
    }
  }
}

// Get query from command line arguments
const query = process.argv.slice(2).join(' ');
if (!query) {
  console.log('Usage: ts-node src/cli.ts <search query>');
  console.log('Example: ts-node src/cli.ts "applicationNumber:12345678"');
  process.exit(1);
}

queryMCP(query); 