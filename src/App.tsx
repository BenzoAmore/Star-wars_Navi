import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/MainPage';
import HeroPage from '@/pages/HeroPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

const App: FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people/:id" element={<HeroPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
