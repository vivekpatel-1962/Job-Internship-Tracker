import { Container, Typography } from '@mui/material';

function Login() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Login
      </Typography>
      <Typography variant="body1" align="center">
        Login form will be implemented here.
      </Typography>
    </Container>
  );
}


export default Login;
