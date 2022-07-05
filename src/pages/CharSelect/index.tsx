import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import CharHolder from '../../components/CharHolder';
import './index.css';

const CharSelectPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="char-select-container">
      <div className="overlay">
        <Grid height="100%" container display="flex" alignItems="center">
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography variant="h4" color="white">Seleção de personagens</Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Grid container spacing={1} display="flex" justifyContent="center">
              {[0, 1, 2].map((item) => (
                <Grid key={item} item xs={2}>
                  <CharHolder character={!item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => navigate('/')}
                >
                  Sair
                </Button>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate('/private/game')}
                >
                  Jogar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default CharSelectPage;
