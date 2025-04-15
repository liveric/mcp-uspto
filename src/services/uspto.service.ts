import axios from 'axios';
import { PEDSResponse, PEDSDocument } from '../types/patent.types';
import { PatentData } from '../types/mcp.types';

const BASE_URL = 'https://api.uspto.gov/api/v1/patent/applications/search';

const getApiKey = () => {
  const apiKey = process.env.USPTO_API_KEY;
  if (!apiKey) {
    throw new Error('USPTO_API_KEY environment variable is not set');
  }
  return apiKey;
};

export async function searchUSPTO(query: string): Promise<PatentData[]> {
  try {
    const apiKey = getApiKey();
    const response = await axios.get<PEDSResponse>(
      BASE_URL,
      {
        params: {
          text: query,
          start: 0,
          rows: 20
        },
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('USPTO Search Response:', JSON.stringify(response.data, null, 2));

    const docs = response.data.queryResults?.searchResponse?.response?.docs || [];
    return docs.map((doc: PEDSDocument) => ({
      applicationNumber: doc.applId || '',
      filingDate: doc.appFilingDate || '',
      patentNumber: doc.patentNumber || '',
      title: doc.inventionTitle || '',
      inventors: doc.inventorName || [],
      assignees: doc.assigneeEntityName || [],
      status: doc.appStatus || '',
      abstract: doc.abstractText || '',
      claims: doc.claims || [],
      description: doc.specification || '',
      events: []
    }));
  } catch (error) {
    console.error('Error searching USPTO:', error);
    throw new Error('Failed to search USPTO');
  }
}

export async function getPatentDetailsFromAPI(patentNumber: string): Promise<PatentData> {
  const requestParams = {
    text: `applicationNumber:${patentNumber}`,
    start: 0,
    rows: 1
  };

  try {
    console.log('Fetching patent details for:', patentNumber);
    const apiKey = getApiKey();
    console.log('Using API key:', apiKey);
    console.log('Request params:', JSON.stringify(requestParams, null, 2));
    
    const response = await axios.get<PEDSResponse>(
      BASE_URL,
      {
        params: requestParams,
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('USPTO API Response:', JSON.stringify(response.data, null, 2));

    const docs = response.data.queryResults?.searchResponse?.response?.docs;
    if (!docs || docs.length === 0) {
      throw new Error('Patent not found');
    }

    const doc = docs[0];
    return {
      applicationNumber: doc.applId || '',
      filingDate: doc.appFilingDate || '',
      patentNumber: doc.patentNumber || '',
      title: doc.inventionTitle || '',
      inventors: doc.inventorName || [],
      assignees: doc.assigneeEntityName || [],
      status: doc.appStatus || '',
      abstract: doc.abstractText || '',
      claims: doc.claims || [],
      description: doc.specification || '',
      events: []
    };
  } catch (error) {
    console.error('USPTO API Error:', {
      error: error instanceof Error ? error.message : String(error),
      request: {
        url: BASE_URL,
        params: requestParams
      }
    });
    throw new Error('Failed to fetch patent details');
  }
}