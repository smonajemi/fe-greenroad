import React, { FormEvent, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FunctionComponent } from 'react';
import { Typography, Container, CssBaseline, Box, Avatar, TextField, FormControlLabel, Checkbox, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LockOpenOutlined, LockOutlined } from '@mui/icons-material';
import { BackendUser, LoginUser } from 'types';
import { auth } from 'config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import routes from 'config/routes';

interface Props {
    setValue: Function
    handleSignInChange: Function
    handleSubmit: Function
    isValidated: boolean
}

const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        Be-Mindful
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignIn: FunctionComponent<Props> = ({setValue, handleSignInChange, handleSubmit, isValidated}) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onChange={e => handleSignInChange(e, e?.target?.name)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => handleSubmit(e)}
              disabled={!isValidated}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              <Button onClick={() => setValue(1)}>
                  <Typography variant='body2'>
                  Forgot Password?
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={() => setValue(1)}>
                  <Typography variant='body2'>
                  Don't have an account? Sign Up
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default SignIn