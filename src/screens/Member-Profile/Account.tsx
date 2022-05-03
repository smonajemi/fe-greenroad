import { Box, Container, Grid, Typography } from '@mui/material';
import { MainContainer } from 'components/MainContainer';
import { FunctionComponent } from 'react';
import { BackendUser } from 'types';
import AccountProfile from '../components/Account/AccountProfile';
import AccountProfileDetails from '../components/Account/AccountProfileDetails';
import { DashboardLayout } from '../components/Account/DashboardLayout';
export interface IAccountProps {
  currentUser: BackendUser
  setCurrentUser: Function
}

const Account: FunctionComponent<IAccountProps> = ({currentUser, setCurrentUser}) => (
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
            <AccountProfile currentUser={currentUser} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </MainContainer>
);

export default Account;