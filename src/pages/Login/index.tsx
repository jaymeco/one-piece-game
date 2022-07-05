import React from 'react';
import {
  Box,
  Grid,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './index.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="login-container">
      <Grid container className="main-container" paddingX={3}>
        <Grid item xs={4} display="flex" alignItems="center" justifyContent="center">
          <Box
            boxShadow={8}
            borderRadius={3}
            padding={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="login-card"
          >
            <Typography variant="h6">Entrar</Typography>
            <Grid
              container
              spacing={6}
              marginTop={1}
              component="form"
              className="form-container"
            >
              <Grid item xs={12}>
                <TextField
                  label="E-mail"
                  id="outlined-size-small"
                  name="email"
                  fullWidth
                  placeholder="Ex.: example@mail.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Senha"
                  id="outlined-size-small"
                  name="password"
                  fullWidth
                  placeholder="Digite sua senha..."
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  onClick={() => navigate('/private/personagens')}
                  color="primary"
                  variant="contained"
                >
                  Entrar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={8} display="flex" justifyContent="flex-end">
          <img
            alt="main"
            className="login-picture"
            width={750}
            src={require('../../assets/images/main-picture.png')}
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default LoginPage;
