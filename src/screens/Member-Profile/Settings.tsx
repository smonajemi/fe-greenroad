import { Box, Container, Typography } from '@mui/material';
import { MainContainer } from 'components/MainContainer';
import { DashboardLayout } from 'screens/components/Account/DashboardLayout';
import SettingsPassword from 'screens/components/Setting/SettingsPassword';



const Settings = () => (
  <MainContainer title={'Settings'}>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >

    </Box>
  </MainContainer>
);

Settings.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Settings;