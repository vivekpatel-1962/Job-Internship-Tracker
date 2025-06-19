import { Container, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Your job application dashboard will be displayed here.
      </Typography>
    </Container>
  );
}

export default Dashboard;
