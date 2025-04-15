export interface PatentEvent {
  code: string;
  description: string;
  date: string;
}

export interface PatentData {
  applicationNumber: string;
  filingDate: string;
  patentNumber: string;
  title: string;
  inventors: string[];
  assignees: string[];
  status: string;
  abstract: string;
  claims: string[];
  description: string;
  events: PatentEvent[];
}

export interface MCPPatentDetailsContext {
  type: 'patent_details';
  patentNumber: string;
}

export interface MCPPatentSearchContext {
  type: 'patent_search';
  query: string;
  filters?: {
    year?: string;
    status?: string;
    assignee?: string;
    [key: string]: any;
  };
}

export interface MCPRequest {
  model: string;
  context: MCPPatentDetailsContext | MCPPatentSearchContext;
}

export interface MCPResponse {
  response: string;
  error?: {
    code: string;
    message: string;
  };
} 