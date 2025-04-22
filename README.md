# Decentralized File Storage System using IPFS

A modern web application that provides decentralized file storage capabilities using the InterPlanetary File System (IPFS) through Pinata's infrastructure. Built with React and styled with Material-UI, it offers a sleek, user-friendly interface for uploading and managing files in a decentralized manner.

## 🚀 Key Features

### File Upload to IPFS
- Secure file uploading to IPFS network via Pinata
- Real-time upload progress indication
- Immediate feedback with success/error messages

### Modern User Interface
- Clean, responsive design using Material-UI components
- Intuitive drag-and-drop file upload
- Smooth animations and transitions
- Mobile-friendly layout

### File Management
- List view of all uploaded files
- Timestamp tracking for each upload
- Direct links to view files on IPFS
- Easy-to-use file browsing interface

## 🛠️ Technical Stack

### Frontend Development
- Frontend: React with Vite for fast development and building
- UI Framework: Material-UI (MUI) for polished components
- Storage: IPFS via Pinata API
- HTTP Client: Axios for API communications
- Styling: CSS-in-JS with Emotion and custom CSS

### Architecture
- Implements a modern React application structure
- Uses environment variables for secure API key management
- Features a component-based architecture for maintainability
- Includes error handling and loading states

## 👥 Target Users
- Developers looking for decentralized storage solutions
- Users who need permanent, decentralized file hosting
- Projects requiring immutable file storage

## 🚦 Getting Started

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
```env
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

## 🔑 Environment Variables

The following environment variables are required:

- `VITE_PINATA_API_KEY`: Your Pinata API key
- `VITE_PINATA_SECRET_API_KEY`: Your Pinata Secret API key

## 🛠️ Development

### Project Structure
```
├── src/
│   ├── assets/        # Static assets
│   ├── components/    # React components
│   ├── App.jsx        # Main application component
│   ├── main.jsx      # Application entry point
│   └── theme.js      # Material-UI theme configuration
├── public/           # Public static files
├── .env             # Environment variables
└── package.json     # Project dependencies and scripts
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🚀 Deployment

This project is optimized for deployment on platforms like Vercel. To deploy:

1. Connect your repository to your preferred deployment platform
2. Configure environment variables in your deployment settings
3. Deploy the application

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [IPFS](https://ipfs.io/) for providing the decentralized storage infrastructure
- [Pinata](https://pinata.cloud/) for IPFS pinning services
- [Material-UI](https://mui.com/) for the UI components
- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for the development framework
