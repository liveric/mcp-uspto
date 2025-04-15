export interface PatentSearchResult {
  applicationNumber: string;
  filingDate: string;
  patentNumber?: string;
  patentTitle: string;
  inventorName: string;
  assigneeName?: string;
  status: string;
}

export interface PatentDetails {
  applicationNumber: string;
  filingDate: string;
  patentNumber?: string;
  patentTitle: string;
  inventorName: string;
  assigneeName?: string;
  status: string;
  abstractText?: string;
  claims?: string[];
  description?: string;
}

export interface USPTOPatent {
  applicationNumber: string;
  filingDate: string;
  patentNumber: string;
  title: string;
  inventors: string[];
  assignees: string[];
  applicationStatus: string;
  abstract?: string;
  claims?: string[];
  description?: string;
}

export interface USPTOEventData {
  eventCode: string;
  eventDescriptionText: string;
  eventDate: string;
}

export interface USPTOInventorAddress {
  cityName?: string;
  countryCode?: string;
  nameLineOneText: string;
  countryName?: string;
  postalAddressCategory: string;
}

export interface USPTOInventor {
  firstName?: string;
  lastName: string;
  inventorNameText: string;
  middleName?: string;
  correspondenceAddressBag: USPTOInventorAddress[];
}

export interface USPTOApplicant {
  applicantNameText: string;
  correspondenceAddressBag: USPTOInventorAddress[];
}

export interface USPTOEntityStatusData {
  smallEntityStatusIndicator: boolean;
  businessEntityStatusCategory: string;
}

export interface USPTOApplicationMetaData {
  firstInventorToFileIndicator?: string;
  applicationStatusCode: number;
  applicationTypeCode: string;
  entityStatusData: USPTOEntityStatusData;
  filingDate: string;
  inventorBag: USPTOInventor[];
  applicationStatusDescriptionText: string;
  applicantBag: USPTOApplicant[];
  firstApplicantName: string;
  customerNumber: number;
  inventionTitle: string;
  nationalStageIndicator: boolean;
  firstInventorName: string;
  applicationConfirmationNumber: number;
  effectiveFilingDate: string;
  applicationTypeLabelName: string;
  publicationCategoryBag: string[];
  applicationStatusDate: string;
  docketNumber?: string;
  applicationTypeCategory: string;
}

export interface USPTOPatentData {
  applicationNumber: string;
  filingDate: string;
  patentNumber: string;
  title: string;
  inventors: string[];
  assignees: string[];
  applicationStatus: string;
  abstract: string;
  claims: string[];
  description: string;
}

export interface USPTOSearchResponse {
  results: USPTOPatentData[];
  total: number;
  start: number;
  rows: number;
}

export interface USPTOPatentResponse extends USPTOPatentData {}

export interface ODPPatentData {
  applicationNumber: string;
  filingDate: string;
  patentNumber?: string;
  title: string;
  inventors: string[];
  assignees: string[];
  status: string;
  abstract?: string;
  claims?: string[];
  description?: string;
}

export interface ODPSearchResponse {
  total: number;
  offset: number;
  limit: number;
  results: ODPPatentData[];
}

export interface PatentsViewInventor {
  inventor_first_name: string;
  inventor_last_name: string;
}

export interface PatentsViewAssignee {
  assignee_organization: string;
}

export interface PatentsViewClaim {
  claim_text: string;
}

export interface PatentsViewPatent {
  patent_number: string;
  patent_date: string;
  patent_title: string;
  patent_abstract?: string;
  inventors?: PatentsViewInventor[];
  assignees?: PatentsViewAssignee[];
  claims?: PatentsViewClaim[];
}

export interface PatentsViewResponse {
  patents: PatentsViewPatent[];
  count: number;
  total_patent_count: number;
}

/** @deprecated Use ODPPatentData instead - PEDS API retired March 14, 2025 */
export interface PEDSDocument {
  applId: string;
  appFilingDate: string;
  patentNumber?: string;
  inventionTitle: string;
  inventorName?: string[];
  assigneeEntityName?: string[];
  appStatus: string;
  abstractText?: string;
  claims?: string[];
  specification?: string;
}

/** @deprecated Use ODPSearchResponse instead - PEDS API retired March 14, 2025 */
export interface PEDSResponse {
  queryResults: {
    searchResponse: {
      response: {
        numFound: number;
        start: number;
        docs: PEDSDocument[];
      };
    };
  };
}