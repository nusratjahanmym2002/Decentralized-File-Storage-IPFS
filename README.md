# Decentralized File Storage - IPFS

A modern web application for decentralized file storage using IPFS and Pinata. Built with React, Vite, and Material-UI.

## Features

- Upload files to IPFS through Pinata
- Modern, responsive UI with Material-UI
- Real-time upload status and progress
- View and manage uploaded files
- Direct links to view files on IPFS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Pinata account with API credentials

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
cd decentralized-file-storage-ipfs
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with your Pinata credentials:
```
VITE_PINATA_API_KEY=your_api_key
VITE_PINATA_SECRET_API_KEY=your_secret_key
```

4. Start the development server
```bash
npm run dev
```

### Building for Production

To create a production build:
```bash
npm run build
```

The build output will be in the `dist` directory.

## Environment Variables

The following environment variables are required:

- `VITE_PINATA_API_KEY`: Your Pinata API key
- `VITE_PINATA_SECRET_API_KEY`: Your Pinata Secret API key

## Tech Stack

- React
- Vite
- Material-UI
- IPFS (via Pinata)
- Axios

## Deployment

This project is optimized for deployment on Vercel. Make sure to:

1. Connect your repository to Vercel
2. Add the environment variables in your Vercel project settings
3. Deploy!
