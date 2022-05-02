import { Box, Container, Typography } from '@mui/material';
import { MainContainer } from 'components/MainContainer';
import { DashboardLayout } from './components/Account/DashboardLayout';
import { SettingsNotifications } from './components/Setting/SettingsNotifications';
import { SettingsPassword } from './components/Setting/SettingsPassword';


const Settings = () => (
  <MainContainer title={'Settings'}>
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
          Settings
        </Typography>
        <SettingsNotifications />
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
  </MainContainer>
);

Settings.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Settings;