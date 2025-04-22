import { useState } from 'react'
import axios from 'axios'
import {
  Container,
  Box,
  Typography,
  Button,
  Alert,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  LinearProgress,
  Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  CloudUpload as CloudUploadIcon,
  OpenInNew as OpenInNewIcon,
  LibraryBooks as LibraryBooksIcon
} from '@mui/icons-material';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function App() {
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handelSubmit = async(e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const fileData = new FormData();
      fileData.append("file", file);

      const responseData = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: fileData,
        headers: {
          pinata_api_key: import.meta.env.VITE_PINATA_API_KEY,
          pinata_secret_api_key: import.meta.env.VITE_PINATA_SECRET_API_KEY,
          "Content-Type": "multipart/form-data"
        }
      });
      
      const url = "https://gateway.pinata.cloud/ipfs/" + responseData.data.IpfsHash;
      setFileUrl(url);
      setUploadedFiles(prev => [...prev, {
        name: file.name,
        url: url,
        timestamp: new Date().toLocaleString()
      }]);
      setFile("");
    } catch(err) {
      console.log(err);
      setError("Failed to upload file. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box 
      sx={{ 
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h1" gutterBottom color="primary">
              Decentralized File Storage
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Powered by IPFS
            </Typography>
          </Box>

          <Paper elevation={3} sx={{ p: 4 }}>
            <Box component="form" onSubmit={handelSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                sx={{ mb: 2 }}
              >
                {file ? file.name : 'Choose File'}
                <VisuallyHiddenInput
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setError("");
                  }}
                />
              </Button>
              
              <Button 
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading || !file}
                sx={{ minWidth: 200 }}
              >
                {isLoading ? "Uploading..." : "Upload to IPFS"}
              </Button>
            </Box>

            {isLoading && (
              <Box sx={{ width: '100%', mt: 2 }}>
                <LinearProgress />
              </Box>
            )}

            {error && (
              <Fade in={!!error}>
                <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>
              </Fade>
            )}
            
            {fileUrl && (
              <Fade in={!!fileUrl}>
                <Alert severity="success" sx={{ mt: 2 }}>
                  File uploaded successfully!{' '}
                  <Button
                    size="small"
                    endIcon={<OpenInNewIcon />}
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View File
                  </Button>
                </Alert>
              </Fade>
            )}
          </Paper>

          {uploadedFiles.length > 0 && (
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LibraryBooksIcon sx={{ mr: 1 }} />
                Uploaded Files
              </Typography>
              <List>
                {uploadedFiles.map((item, index) => (
                  <ListItem
                    key={index}
                    divider={index !== uploadedFiles.length - 1}
                    sx={{ 
                      '&:hover': { 
                        bgcolor: 'action.hover',
                        transition: 'background-color 0.2s'
                      }
                    }}
                  >
                    <ListItemText
                      primary={item.name}
                      secondary={item.timestamp}
                      sx={{ pr: 2 }}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        color="primary"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default App;