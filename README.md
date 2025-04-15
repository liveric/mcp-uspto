# MCP USPTO Server

A Model Context Protocol (MCP) server for USPTO Patent data. This server provides structured context and information about patents to AI models, enabling them to answer questions about patents more effectively.

## Quick Start

Run directly with npx:

```bash
npx mcp-uspto
```

The server will start on port 3000 by default.

## Installation

If you want to install globally:

```bash
npm install -g mcp-uspto
```

Then run:

```bash
mcp-uspto
```

## API Endpoints

### Search Patents
```bash
POST /api/patents/search
Content-Type: application/json

{
  "query": "artificial intelligence",
  "filters": {
    "year": "2023"
  }
}
```

### Get Patent Details
```bash
GET /api/patents/:patentNumber
```

Example:
```bash
GET /api/patents/US11111111
```

## Environment Variables

Create a `.env` file with:

```
PORT=3000
```

## Development

1. Clone the repository:
```bash
git clone https://github.com/liveric/mcp-uspto.git
cd mcp-uspto
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## License

ISC

## Author

Eric Chandler