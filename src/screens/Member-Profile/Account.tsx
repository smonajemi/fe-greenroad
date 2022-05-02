import { Box, Container, Grid, Typography } from '@mui/material';
import { MainContainer } from 'components/MainContainer';
import AccountProfile from '../components/Account/AccountProfile';
import AccountProfileDetails from '../components/Account/AccountProfileDetails';
import { DashboardLayout } from '../components/Account/DashboardLayout';

const Account = () => (
    <MainContainer title={'Account'}>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </MainContainer>
);

Account.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Account;