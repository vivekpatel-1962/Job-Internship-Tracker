import { Container, Typography } from '@mui/material';

function Profile() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Profile
      </Typography>
      <Typography variant="body1">
        Your profile information will be displayed here.
      </Typography>
    </Container>
  );
}

export default Profile;
