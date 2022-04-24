import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Paper, Fab, Typography } from '@mui/material';
import { Add, FileOpen } from '@mui/icons-material';
import './App.css';
import icon from '../../assets/icon.png';

const Main = () => {
  return (
    <div>
      <Paper
        elevation={3}
        style={{
          height: '75vh',
          width: '75vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FAF9F6'
        }}
      >
        <img className="logo" alt="icon" src={icon} />
        <fieldset className="buttonWrapper">
          <legend>
            <Typography variant="overline">Welcome to Banana!</Typography>
          </legend>
          <Fab
            style={{ marginRight: '1rem' }}
            color="primary"
            variant="extended"
            onClick={() => console.log('create new file')}
          >
            <Add sx={{ mr: 1 }} />
            New File
          </Fab>
          <Fab
            style={{ marginLeft: '1rem' }}
            variant="extended"
            onClick={() => console.log('open existing file')}
          >
            <FileOpen sx={{ mr: 1 }} />
            Open Existing
          </Fab>
        </fieldset>
      </Paper>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
